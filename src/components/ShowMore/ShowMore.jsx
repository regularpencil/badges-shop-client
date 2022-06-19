import "./ShowMore.scss";

import { addToHistory } from "../../store/thunks";

import {useParams} from "react-router-dom";
import {useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import favorite from "../../images/favorite.svg";

const ShowMore = () => {
    const dispatch = useDispatch();

    const [badge, setBadge] = useState({});
    const {id} = useParams();
    const badges = useSelector(state=>state.badges.badges);
    const user = useSelector(state=>state.authorization.user);

    useEffect(function(){
        let ourBadge = [];
        ourBadge = badges.filter(function(item){
            if(id == item.id) {
                return item;
            }
        });
        setBadge(ourBadge[0]);
        dispatch(addToHistory(user.email, ourBadge[0]));
    }, []);


    return (
        <div className="show-more">
            {
            badge ? 
            <div className="show-more__body">
                    <img src={badge.image} alt="" className="show-more__image" />
                    <div className="show-more__right">
                        <div className="show-more__name">{badge.name}</div>
                        <div className="show-more__description">&#171;{badge.description}&#187;</div>
                        <div className="show-more__material">
                            <div className="show-more__material-title">Материал:</div>
                            <div className="show-more__material-value">{badge.material}</div>
                        </div>
                        <div className="show-more__fastening">
                            <div className="show-more__fastening-title">Тип крепления:</div>
                            <div className="show-more__fastening-value">{badge.typeFastening}</div>
                        </div>
                     
                        <div className="show-more__actions">
                                <div className="show-more__button">В корзину</div>
                                <img src={favorite} alt="" className="show-more__favorite" />
                        </div>
                    </div>
            </div> 
            : 
            "Упс, что-то пошло не так!"
            }
        </div>
    )
}

export default ShowMore;