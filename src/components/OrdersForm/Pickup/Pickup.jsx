import "./Pickup.scss"

import { addNewOrder } from "../../../store/thunks"

import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const options = [
    {address: "Ул. Добролюбова, д. 25", active: false},
    {address: "Ул. Восход, д. 45", active: true},
    {address: "Ул. Солнечный бриз, д. 17", active: false}
]

const Pickup = ({goods, user, totalPrice}) => {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const [choosedAddress, setChoosedAddress] = useState("Выберите адрес");
    const navigate = useNavigate();
    const isDelivery = useSelector(state=>state.orders.isDelivery);

    function chooseOption(item) {
        setChoosedAddress(item.address);
        setIsOpen(false);
    }

    function acceptOrder(){
        const pickUpData = {
            shopAddress: choosedAddress,
        }
        dispatch(addNewOrder(user.email, {id:Math.ceil((Math.random()*1000)), goods, orderCost: totalPrice, isOpen: false, isDelivery, pickUpData}));
        navigate("/orders");
    }

    return(
        <div className="pickup">
            <div className="pickup__select">
                <div className="pickup__select-head" onClick={()=>{setIsOpen(!isOpen)}}>{choosedAddress}</div>
                {
                isOpen
                &&
                <div className="pickup__select-body">
                    {options.map(function(item){
                        return <div 
                        className="pickup__select-option" 
                        onClick={()=>{chooseOption(item)}}
                        key={Math.random()}
                        >{item.address}</div>
                    })}
                </div>
                }
            </div>
            <div className="pickup__button" onClick={acceptOrder}>Подтвердить заказ</div>
        </div>
    )
}

export default Pickup;