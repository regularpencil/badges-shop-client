import "./ShowMore.scss";

import { addToHistory, addToFavorites, removeFromFavorites } from "../../store/thunks";

import {useParams} from "react-router-dom";
import {useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";


const ShowMore = () => {
    const dispatch = useDispatch();

    const [badge, setBadge] = useState({});
    const [favoriteBadge, setFavoriteBadge] = useState(false);
    const {id} = useParams();
    const badges = useSelector(state=>state.badges.badges);
    const user = useSelector(state=>state.authorization.user);
    const favoriteBadges = useSelector(state=>state.favorite.favoriteBadges);

    useEffect(function(){
        let currentBadge = [];
        currentBadge = badges.filter(function(item){
            if(Number(id) === item.id) {
                return item;
            }
        });
        setBadge(currentBadge[0]);
        dispatch(addToHistory(user.email, currentBadge[0]));
        if(favoriteBadges.includes(currentBadge[0].id)){
            setFavoriteBadge(true);
        }
    }, []);

    function addBadgeToBasket() {
        dispatch({type:"ADD_BADGE_TO_BASKET", payload:{id, name: badge.name, price: badge.price, image: badge.image, count: 1}});
    }

    function changeFavorite() {
        if(!favoriteBadge){
            dispatch(addToFavorites(user.email, Number(id)));
        } else {
            dispatch(removeFromFavorites(user.email, Number(id)));
        }
        setFavoriteBadge(!favoriteBadge);    
    }

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
                                <div className="show-more__button" onClick={addBadgeToBasket}>В корзину</div>
                                <svg onClick={changeFavorite} className="badge__favorite" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71.48 70.08"><defs></defs><g id="Capa_2" data-name="Capa 2"><g id="Capa_2-2" data-name="Capa 2"><rect className={favoriteBadge ? "cls-1 cls-1-active" : "cls-1"} width="71.48" height="70.08" rx="16.46"/><path className="cls-2" d="M26.66,16.59a11.82,11.82,0,0,1,8.7,3.91c.29.32.45.36.76,0A11.32,11.32,0,0,1,41.76,17a11.95,11.95,0,0,1,14.8,9,12.72,12.72,0,0,1,.18,4.35,19.51,19.51,0,0,1-5.66,11.42,49.59,49.59,0,0,1-7.86,6.52c-2.43,1.69-5,3.24-7.27,5.11-.12.1-.21.17-.38,0-3.44-2.76-7.3-4.93-10.76-7.67a31.57,31.57,0,0,1-7.54-8,17.36,17.36,0,0,1-2.63-9.18,11.91,11.91,0,0,1,9.23-11.61c.31-.08.62-.12.92-.18A16,16,0,0,1,26.66,16.59Z"/><path className="cls-3" d="M55.67,28.88a17.67,17.67,0,0,1-5,11.3,50.77,50.77,0,0,1-9.32,7.66c-1.8,1.22-3.64,2.39-5.37,3.71-.14.11-.23.16-.4,0-2.66-2-5.52-3.73-8.21-5.7a38.41,38.41,0,0,1-7.74-7.16,17.51,17.51,0,0,1-3.71-8.63,10.48,10.48,0,0,1,5.23-10.94,10.1,10.1,0,0,1,10.47.14A11.91,11.91,0,0,1,35.33,23c.08.12.17.22.25.34s.2.17.33,0c.31-.43.63-.84,1-1.26a10.09,10.09,0,0,1,8.19-4.25,10.37,10.37,0,0,1,10.44,8.41A9.09,9.09,0,0,1,55.67,28.88Z"/></g></g></svg>
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