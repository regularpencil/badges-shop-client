import "./AuthorizationForm.scss";

import AuthService from "../../services/AuthService";

import {useState} from "react";
import {useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";


const AuthorizationForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {register, handleSubmit, formState:{errors}} = useForm();

    const [notification, setNotificaion] = useState({});

    async function onSubmit(data) {
        try{
            const response = await AuthService.login(data.email, data.password);
            if(response.data.error === false){
                if(response.data.user.isActivated){
                    localStorage.setItem("token", response.data.accessToken);
                    dispatch({type: "SET_USER_AFTER_LOGIN", payload: response.data.user});
                    navigate("/page-1");
                }else {
                    setNotificaion({isVisible:true, message:"Активируйте аккаунт по ссылке, отправленной на почту"});
                }
            } else {
                setNotificaion({isVisible:true, message:response.data.message});
            }
        } catch(e){
            console.log(e);
        } 
    }

    return(
        <div className="auth">
            <form className="auth__body" onSubmit={handleSubmit(onSubmit)}>
                <Link to="/page-1" className="auth__close"></Link>
                <div className="auth__title">Авторизация</div>
                {notification.isVisible && <div className="auth__notification">{notification.message}</div>}
                <div className="auth__input">
                    <input type="text" {...register("email", 
                    {
                        required:{value:true, message:"Обязательное поле для заполнения"}
                    })} 
                    className="auth__login" placeholder="Ваш логин"/>
                     {errors?.email && <div className="auth__error">{errors?.email?.message}</div>}
                </div>
             
                <div className="auth__input">
                    <input type="password" {...register("password", {
                        required:{value:true, message:"Обязательное поле для заполнения"}
                    })} 
                    className="auth__password" placeholder="Ваш пароль"/>
                    {errors?.password && <div className="auth__error">{errors?.password?.message}</div>}
                </div>
                
                
                <input className="auth__login-btn" value="Войти" type="submit"/>
                <Link to="/registration" className="auth__registration-btn">Перейти к регистрации</Link>
            </form>
        </div>
    )
}

export default AuthorizationForm;