import "./Searcher.scss";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";

const Searcher = () => {
    const inputRef = useRef();

    const dispatch = useDispatch();
    const filteredBadges = useSelector(state=>state.filter.filteredBadges);

    useEffect(function(){
        dispatch({type:"SEARCHED_BADGES_SET", payload: filteredBadges});
        inputRef.current.value = "";
    }, [filteredBadges])

    function searchHandler(e) {
        const searchValue = e.target.value;
        const foundList = filteredBadges.filter(function(item){
            if(item.name.toLowerCase().includes(searchValue.toLowerCase())) {
                return item;
            }
        })
        dispatch({type:"SEARCHED_BADGES_SET", payload: foundList});
    }

    return(
        <>
            <input 
                ref={inputRef}
                className="searcher" 
                type="text" 
                placeholder="Введите название" 
                onChange={searchHandler}
            />
        </>
    )
}

export default Searcher;