import UserService from "../services/UserService";
export const removeFromFavorites = (email, id) => {
    return async (dispatch, getState) => {
        let favorites = [];
        const promise = new Promise((resolve,reject)=>{
            dispatch({type:"REMOVE_FAVORITE_BADGE", payload:id}); 
            favorites = getState().favorite.favoriteBadges;
            resolve();
        });
        promise.then(async function(){
            await UserService.saveFavorites(email, favorites);
        })   
    }
}

export const addToFavorites = (email, id) => {
    return async (dispatch, getState) => {
        let favorites = [];
        const promise = new Promise((resolve,reject)=>{
            dispatch({type:"ADD_FAVORITE_BADGE", payload:id}); 
            favorites = getState().favorite.favoriteBadges;
            resolve();
        });
        promise.then(async function(){
            await UserService.saveFavorites(email, favorites);
        })   
    }
}


export const addToHistory = (email, badge) => {
    return async (dispatch, getState) => {
        let history = [];
        const promise = new Promise((resolve,reject)=>{
            dispatch({type:"ADD_HISTORY", payload:badge}); 
            history = getState().history.historyBadges;
            resolve();
        });
        promise.then(async function(){
            await UserService.saveHistory(email, history);
        })   
    }
}

export const addNewOrder = (email, order) => {
    return async (dispatch, getState) => {
        let orders = [];
        const promise = new Promise((resolve,reject)=>{
            dispatch({type:"ADD_NEW_ORDER", payload:order}); 
            orders = getState().orders.orders;
            resolve();
        });
        promise.then(async function(){
            await UserService.saveOrders(email, orders);
        })   
    }
}

export const removeOrder = (email, orderId) => {
    return async (dispatch, getState) => {
        let orders = [];
        const promise = new Promise((resolve,reject)=>{
            dispatch({type:"REMOVE_ORDER", payload:orderId}); 
            orders = getState().orders.orders;
            resolve();
        });
        promise.then(async function(){
            await UserService.saveOrders(email, orders);
        })   
    }
}