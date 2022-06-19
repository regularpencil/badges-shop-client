import "./FavoriteBadges.scss";
import UserService from "../../services/UserService";

import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

import Badge from "../Badge/Badge";

const FavoriteBadges = () => {
    const [favoriteBadges, setFavoriteBadges] = useState([]);

    const badges = useSelector(state=>state.badges.badges);
    const favBadges = useSelector(state=>state.favorite.favoriteBadges);

    useEffect(function(){
        const filteredFavoriteBadges = badges.filter(function(item){
            if(favBadges.includes(item.id)){
                return item;
            }
        })
        setFavoriteBadges(filteredFavoriteBadges);
    },[favBadges]);

    return (
        <div className="favorite-badges">
            {favoriteBadges.map(function(item){
                return <Badge id={item.id} name={item.name} image={item.image} price={item.price} key={"132"+item.id}/>
            })}
        </div>
    )
}

export default FavoriteBadges;