import "./Delivery.scss"

import { addNewOrder } from "../../../store/thunks";

import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Delivery = ({goods, totalPrice, user}) => {
    const dispatch = useDispatch();
    const {register, handleSubmit, formState:{errors}, setValue} = useForm();
    const navigate = useNavigate();
    const isDelivery = useSelector(state=>state.orders.isDelivery);

    useEffect(function(){
        setValue("phoneNumber", user.phoneNumber);
    }, [])

    async function acceptOrder(data) {
        const deliveryData = {
            mailIndex: data.mailIndex,
            addressee: data.addressee,
            address: data.address,
            phoneNumber: data.phoneNumber,
        }
        dispatch(addNewOrder(user.email, {id:Math.ceil((Math.random()*1000)), goods, orderCost: totalPrice, isOpen: false, isDelivery, deliveryData}));
        navigate("/orders");
    }

    return(
        <div className="delivery">

            <form action="" className="delivery__form" onSubmit={handleSubmit(acceptOrder)}>
                <div className="delivery__form-item">
                    <div className="delivery__input-description">Введите индекс почтового отделения:</div>
                    <input {...register("mailIndex", {required:true})} type="text" className="delivery__input" />
                </div>
                
                <div className="delivery__form-item">
                    <div className="delivery__input-description">ФИО:</div>
                    <input  {...register("addressee", {required:true})} type="text" className="delivery__input" />
                </div>

                <div className="delivery__form-item">
                    <div className="delivery__input-description">Адрес:</div>
                    <input {...register("address", {required:true})} type="text" className="delivery__input" />
                </div>

                <div className="delivery__form-item">
                    <div className="delivery__input-description">Номер телефона:</div>
                    <input {...register("phoneNumber", {required:true})} type="text" className="delivery__input" />
                </div>
                <input className="delivery__submit" type="submit" value="Подтвердить заказ"/>
            </form>

        </div>
    )
}

export default Delivery;