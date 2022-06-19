const defaultState = {
    orders: [],
    isDelivery: true,
}

export const ordersReducer = (state=defaultState, {type, payload}) => {
    switch(type){
        case "ORDERS_INIT": {
            return {...state, orders: payload};
        }
        case "CHANGE_TYPE_ORDER": {
            return {...state, isDelivery: !state.isDelivery};
        }
        case "ADD_NEW_ORDER": {
            return {...state, orders:[...state.orders, payload]};
        }
        case "CHANGE_ORDER_OPEN_STATE": {
            const openedOrders = [...state.orders].map(function(item){
                if(item.id != payload){
                    return item;
                } else {
                    item.isOpen = !item.isOpen;
                    return item;
                }
            })
            return {...state, orders:openedOrders};
        }
        case "REMOVE_ORDER": {
            const newOrders = [...state.orders].filter(function(item){
                if(item.id != payload){
                    return item;
                }
            })
            return {...state, orders:newOrders};
        }
        default:
            return state;
    }
}