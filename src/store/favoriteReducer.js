const defaultState = {
    favoriteBadges: [],
}

export const favoriteReducer = (state=defaultState, {type, payload}) => {
    switch(type) {
        case "FAVORITE_INIT":
            return {...state, favoriteBadges: payload};
        case "ADD_FAVORITE_BADGE":
            return {...state, favoriteBadges: [...state.favoriteBadges, payload]};
        case "REMOVE_FAVORITE_BADGE":
            const newFavoriteBadges = state.favoriteBadges.filter(function(item){
                if(item !== payload){
                    return item;
                }
            })
            return {...state, favoriteBadges: newFavoriteBadges};
        default:
            return state;
    }
}