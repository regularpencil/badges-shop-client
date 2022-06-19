import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import { filterReducer } from "./filterReducer";
import { badgesReducer } from "./badgesReducer";
import { basketReducer } from "./basketReducer";
import {searchReducer} from "./searchReducer";
import { historyReducer } from "./historyReducer";
import { favoriteReducer } from "./favoriteReducer";
import { authorizationReducer } from "./authorizationReducer";
import { ordersReducer } from "./ordersReducer";

const combineReducer = combineReducers({
    filter: filterReducer,
    badges: badgesReducer,
    basket: basketReducer,
    search: searchReducer,
    favorite: favoriteReducer,
    history: historyReducer,
    authorization: authorizationReducer,
    orders: ordersReducer,
})


export const store = createStore(combineReducer, applyMiddleware(thunk));