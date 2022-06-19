import "./OrdersForm.scss";

import Pickup from "./Pickup/Pickup";
import Delivery from "./Delivery/Delivery";

import {useSelector, useDispatch} from "react-redux";
import { Link} from "react-router-dom";

const OrdersForm = () => {
    const dispatch = useDispatch();

    const isDelivery = useSelector(state=>state.orders.isDelivery);
    const goods = useSelector(state=>state.basket.goods);
    const totalPrice = useSelector(state=>state.basket.totalPrice);
    const user = useSelector(state=>state.authorization.user);

    function changeTypeOfOrder() {
        dispatch({type:"CHANGE_TYPE_ORDER"});
    }

    return (
        <div className="orders-form">
            <div className="orders-form__body">
                <Link to="/page-1" className="orders-form__close"></Link>
                <h1 className="orders-form__title">Оформление заказа</h1>
                <div className="orders-form__type">
                    <div onClick={changeTypeOfOrder} className={isDelivery ? "orders-form__delivery orders-form__delivery-active" : "orders-form__delivery"}>Доставка почтой</div>
                    <div onClick={changeTypeOfOrder} className={isDelivery ? "orders-form__pickup" : "orders-form__pickup orders-form__pickup-active"}>Забрать в магазине</div>
                </div>
                {
                isDelivery ?
                <Delivery goods={goods} totalPrice={totalPrice} user={user}/>
                :
                <Pickup goods={goods} totalPrice={totalPrice} user={user}/>
                }
            </div>
        </div>
    )
}

export default OrdersForm;