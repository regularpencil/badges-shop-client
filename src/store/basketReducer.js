const defaultState = {
    basketIsVisible: false,
    goods: [],
    totalPrice:0,
    goodsIds:[],
}

export const basketReducer = (state=defaultState, {type, payload}) => {
    switch(type) {
        case "CHANGE_BASKET_VISIBLE":
            return {...state, basketIsVisible: payload};

        case "ADD_BADGE_TO_BASKET":
            let increasedTotalPrice = state.totalPrice;
            let newArr = [...state.goods];
            let flag = (state.goods.find(item => item.id === payload.id) && true) || false;
            if(!flag) {
               increasedTotalPrice += payload.price;
               newArr.push(payload);
            }
            return {...state, goods:newArr, totalPrice: increasedTotalPrice};

        case "REMOVE_BADGE_FROM_BASKET":
            let decreasedTotalPrice = state.totalPrice;
            const newGoods = state.goods.filter(function(item){
                if(item.id !== payload) {
                    return item;
                } else {
                    decreasedTotalPrice -= item.price * (item.count);
                }
            })
            return {...state, goods:newGoods, totalPrice: decreasedTotalPrice};

        case "INCREASE_TOTAL_PRICE":
            let newList = state.goods.map(function(item){
                if(item.id === payload.id) {
                    item.count += 1;
                }
                return item;
            })
            return {...state, goods: newList, totalPrice: state.totalPrice + payload.price};
            
        case "DECREASE_TOTAL_PRICE":
            let newArray = state.goods.map(function(item){
                if(item.id === payload.id) {
                    item.count -= 1;
                }
                return item;
            })
            return {...state, goods: newArray, totalPrice: state.totalPrice - payload.price};

        default:
            return state;
    }
}