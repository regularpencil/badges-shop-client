import {Routes, Route, Navigate} from "react-router-dom";
import { useSelector } from "react-redux";

import Wrapper from "../Wrapper/Wrapper";
import Main from "../MainPage/Main";
import ShowMore from '../ShowMore/ShowMore';
import History from '../History/History';
import FavoriteBadges from '../favoriteBadges/FavoriteBadges';
import AuthorizationForm from '../AuthorizationForm/AuthorizationForm';
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import Profile from "../Profile/Profile";
import OrdersForm from "../OrdersForm/OrdersForm";
import Orders from "../Orders/Orders";


const RouteManager = () => {
    const userAuthorized = useSelector(state=>state.authorization.userAuthorized);
    return (
        <Routes>
            {
              userAuthorized
              ? 
              <Route path="/" element={<Wrapper/>}>
                <Route path="" element={<Navigate to="/page-1"/>}></Route>
                <Route path="page-:pageNumber" element={<Main/>}></Route>
                <Route path="badge-:id" element={<ShowMore/>}></Route>
                <Route path="orders" element={<Orders/>}></Route>
                <Route path="favorites" element={<FavoriteBadges/>}></Route>
                <Route path="history" element={<History/>}></Route>
                <Route path="authorization" element={<AuthorizationForm/>}></Route>
                <Route path="registration" element={<RegistrationForm/>}></Route>
                <Route path="profile" element={<Profile/>}></Route>
                <Route path="ordering" element={<OrdersForm/>}></Route>
              </Route>
              :
              <Route path="/" element={<Wrapper/>}>
                <Route path="" element={<Navigate to="/page-1"/>}></Route>
                <Route path="page-:pageNumber" element={<Main/>}></Route>
                <Route path="badge-:id" element={<ShowMore/>}></Route>
                <Route path="registration" element={<RegistrationForm/>}></Route>
                <Route path="*" element={<AuthorizationForm/>}></Route>
              </Route>
            }
          </Routes>
    )
}

export default RouteManager;