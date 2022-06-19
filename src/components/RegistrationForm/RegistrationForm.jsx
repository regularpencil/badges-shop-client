import "./RegistrationForm.scss";

import AuthService from "../../services/AuthService";

import { useState } from "react";
import { Link } from "react-router-dom";
import {useForm} from "react-hook-form";

const RegistrationForm = () => {
    const [notificationVisible, setNotificationVisible] = useState(false);
    const {
        register,
        formState:{
            errors,
        }, 
        handleSubmit
        } = useForm();

    async function onSubmit(data){
        try{
            const response = await AuthService.registration(data.name, data.email, data.password, data.phoneNumber);
            if(response){
                setNotificationVisible(true);
                localStorage.setItem("token", response.data.accessToken);
            }
        } catch(e){
            console.log(e);
        } 
    }

    return(
        <div className="registration-form">
            <form className="registration-form__body" onSubmit={handleSubmit(onSubmit)}>
                <Link to="/page-1" className="registration-form__close"></Link>
                <div className="registration-form__title">Регистрация</div>

                {
                notificationVisible
                &&
                <div className="registration-form__notification">
                Регистрация прошла успешно, активируйте аккаунт по ссылке, отправленной на почту.
                </div>
                }

                <div className="registration-form__wrap">
                    <input {...register("name", {
                        required:{value:true, message:"Поле обязательно для заполнения"},
                    })} 
                    type="text" className="registration-form__input" placeholder="Вашe Имя"/>
                    {errors?.name && <div className="registration-form__error">{errors.name?.message}</div>}
                </div>

                <div className="registration-form__wrap">
                    <input {...register("email", {
                        required:{value:true, message:"Поле обязательно для заполнения"}
                    })} 
                    type="text"  className="registration-form__input" placeholder="Ваша почта"/>
                    {errors?.email && <div className="registration-form__error">{errors.email?.message}</div>}
                </div>

                <div className="registration-form__wrap">
                    <input {...register("password", {
                        required:{value:true, message:"Поле обязательно для заполнения"}, 
                        minLength:{value:5, message:"Пароль должен содержать как минимум 5 символов"}
                    })} 
                    type="password"  className="registration-form__input" placeholder="Ваш пароль"/>
                    {errors?.password && <div className="registration-form__error">{errors.password?.message}</div>}
                </div>

                <div className="registration-form__wrap">
                    <input {...register("phoneNumber", {
                        required:{value:true, message:"Поле обязательно для заполнения"}, 
                    })} 
                    type="text"  className="registration-form__input" placeholder="Ваш номер телефона"/>
                    {errors?.phoneNumber && <div className="registration-form__error">{errors.phoneNumber?.message}</div>}
                </div>
                 
                <Link to="/authorization" className="registration-form__login-btn">Вернуться к авторизации</Link>
                <input type="submit" value="Зарегистрироваться" className="registration-form__registration-btn"/>
            </form>
        </div>
    )
}

export default RegistrationForm;