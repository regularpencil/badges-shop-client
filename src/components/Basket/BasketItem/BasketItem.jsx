import "./BasketItem.scss";
import deleteGood from "../../../images/deleteGood.svg"; 

import { useDispatch } from "react-redux";
import { useState } from "react";


const BasketItem = ({id, name, image, price}) => {

    const dispatch = useDispatch();

    const [counter, setCounter] = useState(1);

    function deleteBadge() {
        dispatch({type:"REMOVE_BADGE_FROM_BASKET", payload: id});
        dispatch({type:"BADGE_INCART_FALSE", payload: id});
    }

    function plus() {
        const newValue = counter + 1;
        setCounter(newValue);
        dispatch({type:"INCREASE_TOTAL_PRICE", payload: {price, id}});
    }

    function minus() {
        const newValue = counter - 1;
        if(newValue < 1) {
            setCounter(1);
        } else {
            setCounter(newValue);
            dispatch({type:"DECREASE_TOTAL_PRICE", payload: {price, id}});
        }
    }

    return(
        <div className="basket-item">
            <img src={image} alt="" className="basket-item__image"/>
            <div className="basket-item__right">
                <img src={deleteGood} alt="" className="basket-item__delete" onClick={deleteBadge}/>
                <div className="baske-item__name">{name}</div>
                <div className="basket-item__price">{price} &#8381;</div>
                <div className="basket-item__counter">
                    <div className="basket-item__counter-minus" onClick={minus}></div>
                    <div className="basket-item__counter-num">{counter}</div>
                    <div className="basket-item__counter-plus" onClick={plus}></div>
                </div>
            </div>
        </div>
    )
}

export default BasketItem;