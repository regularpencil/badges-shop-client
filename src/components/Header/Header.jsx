import "./Header.scss";

import Menu from "../Menu/Menu";
import Basket from "../Basket/Basket.jsx";

import galaxy from "../../images/galaxy.svg";

import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";


const Header = () => {
    const dispatch = useDispatch();

    const userAuthorized = useSelector(state=>state.authorization.userAuthorized);
    const user = useSelector(state=>state.authorization.user);
    return (
        <div className="header">
            <div className="header__top">
                <img src={galaxy} alt="" className="header__icon"/>
                <div className="header__user">
                    <Basket/>
                    {userAuthorized ? <Link to="/profile" className="header__username">{user.name}</Link> : <Link to="/authorization" className="header__come">Войти</Link>}
                    
                    <div className="header__profile-icon" onClick={()=>{dispatch({type:"CHANGE_AUTH_VISIBLE", payload:true})}}></div>
                </div>
                
            </div>
            <Menu></Menu>
        </div>
    )
}

export default Header;