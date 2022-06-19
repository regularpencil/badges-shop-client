const defaultState = {
  searchedBadges: [],
}

export const searchReducer = (state = defaultState, {type, payload}) => {
    switch(type) {
        case "SEARCHED_BADGES_SET":
            return {...state, searchedBadges: payload};
        default:
            return state;
    }
}