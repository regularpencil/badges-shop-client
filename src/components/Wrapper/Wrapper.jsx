import "./Wrapper.scss";

import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import Header from "../Header/Header";


const Wrapper = () => {
    
    const dispatch = useDispatch();
    const badges = useSelector(state=>state.badges.badges);
    const user = useSelector(state=>state.authorization.user);
    const userAuthorized = useSelector(state=>state.authorization.userAuthorized);

    useEffect(function(){
        dispatch({type:"FILTER_BADGES_INIT", payload: badges});
    }, []);

    useEffect(function(){
        if(userAuthorized) {
            dispatch({type:"ORDERS_INIT", payload: user.orders});
            dispatch({type:"FAVORITE_INIT", payload: user.favorites});
            dispatch({type:"HISTORY_INIT", payload: user.history});
            dispatch({type:"FILTER_BADGES_INIT", payload: badges});
        }
    }, [user])
    
    return(
        <div className="main">
            <Header></Header>
            <Outlet></Outlet>            
        </div>
    )
}

export default Wrapper;