import "./Menu.scss";
import {NavLink} from "react-router-dom";



const Menu = () => {

    return (
        <div className="menu">
           <NavLink className="menu__link" to="/page-1">Главная</NavLink>
           <NavLink className="menu__link" to="/favorites">Избранное</NavLink>
           <NavLink className="menu__link" to="/orders">Мои заказы</NavLink>
           <NavLink className="menu__link" to="/history">История просмотра</NavLink>
        </div>
    )
}

export default Menu;