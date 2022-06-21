import "./Profile.scss";

import { saveUserSettings } from "../../store/thunks";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        register, 
        handleSubmit, 
        formState:{errors},
        setValue,
} = useForm();

    const user = useSelector(state=>state.authorization.user);

    function userLogout() {
        dispatch({type:"USER_LOGOUT"});
        navigate("/authorization");
    }

    useEffect(function(){
        setValue("name", user.name);
        setValue("email", user.email);
        setValue("phoneNumber", user.phoneNumber);
    }, [])

    async function saveSettings(data){
        dispatch(saveUserSettings(user.email, data.name, data.phoneNumber));
    }

    return (
        <div className="profile">
            <div className="profile__title">Личный кабинет</div>
            <form className="profile__body" onSubmit={handleSubmit(saveSettings)}>
                <div className="profile__item">
                    <div className="profile__category">Имя:</div>
                    <input {...register("name", {required:true})} type="text" className="profile__input"/>
                </div>
                <div className="profile__item">
                    <div className="profile__category">Почта:</div>
                    <input {...register("email", {required:true})} disabled={true} type="text" className="profile__input"/>
                </div>
                <div className="profile__item">
                    <div className="profile__category">Телефон:</div>
                    <input {...register("phoneNumber", {required:true})} type="text" className="profile__input"/>
                </div>
        
                <input type="submit" value="Сохранить изменения" className="profile__btn"/>
            </form>
            <div className="profile__logout" onClick={userLogout}>Выйти из аккаунта</div>
            
        </div>
    )
}

export default Profile;