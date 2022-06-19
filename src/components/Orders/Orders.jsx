import "./Orders.scss";

import { useSelector, useDispatch } from "react-redux";
import OrderGoods from "../OrderGoods/OrderGoods";

import { removeOrder } from "../../store/thunks";

const Orders = () => {
    const dispatch = useDispatch();
    const orders = useSelector(state=>state.orders.orders);
    const user = useSelector(state=>state.authorization.user);

    function removeFromOrders(orderId){
        dispatch(removeOrder(user.email, orderId));
    }

    function openOrder(orderId){
        dispatch({type:"CHANGE_ORDER_OPEN_STATE", payload:orderId});
    }

    return(
        <div className="orders">
            <div className="orders__title">Ваши заказы</div>
            {orders.map(function(item){
                return <div className="orders__item" key={Math.random()}>
                    <div className="orders__top">
                        <div className="orders__info">
                            <div className="orders__number">Id заказа: {item.id}</div>
                            <div className="orders__cost">Стоимость: {item.orderCost} &#8381;</div>
                            <div className="orders__more" onClick={()=>{openOrder(item.id)}}>Информация о заказе</div>
                        </div>
                        <div className="orders__cancel" onClick={()=>{removeFromOrders(item.id)}}>Отменить заказ</div>
                    </div>
                    <div className="orders__bottom">
                        {
                            item.isOpen 
                            &&
                            <>
                            <OrderGoods goods={item.goods}/>
                            {
                              item.isDelivery
                              ?
                              <div className="orders__delivery-info">
                              Доставка почтой по адресу: {item.deliveryData.address}. Индекс почты: ({item.deliveryData.mailIndex})
                              </div>
                              :
                              <div className="orders__pickUp-info">
                              Забрать в магазине по адресу: {item.pickUpData.shopAddress}
                              </div>  
                            }  
                            </>
                        }
                    </div>
                </div>
            })}
        </div>
    )
}

export default Orders;