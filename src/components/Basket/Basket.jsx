import "./Basket.scss";

import basket from "../../images/basket.svg";

import { useSelector, useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom";

import BasketItem from "./BasketItem/BasketItem";

const Basket = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const basketIsVisible = useSelector(state => state.basket.basketIsVisible);
    const goods = useSelector(state => state.basket.goods);
    const totalPrice = useSelector(state=>state.basket.totalPrice);

    function toggleBasketVisible() {
        dispatch({type:"CHANGE_BASKET_VISIBLE", payload:!basketIsVisible});
    }

    function confirm() {
        dispatch({type:"CHANGE_BASKET_VISIBLE"});
        navigate("/ordering")
    }

    return(
        <div className="basket">
            <img src={basket} alt="" className="basket__icon" onClick={toggleBasketVisible}/>
            <div className={basketIsVisible ? "basket__body basket__body-visible" : "basket__body"}>
                <div className="basket__close" onClick={toggleBasketVisible}></div>
                {goods.length > 0 ? "" : <div className="basket__void">Пока здесь пусто...</div>}
                
                <div className="basket__goods">
                    {goods.map(function(item){
                        return(
                            <BasketItem id={item.id} name={item.name} price={item.price} image={item.image} key={item.id+"sd"}/>
                        )
                    })}
                </div>
                <div className="basket__bottom">
                    <div className="basket__total-price">Итого: {totalPrice} &#8381;</div>
                    <button disabled={goods.length === 0} className="basket__button" onClick={confirm}>Оформить заказ</button>
                </div>
                
            </div>
        </div>
    )
}

export default Basket;