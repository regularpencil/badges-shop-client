const defaultState = {
    authorizationIsVisible: false,
    userAuthorized: false,
    user:{},
}

export const authorizationReducer = (state=defaultState, {type, payload}) => {
    switch(type) {
        case "CHANGE_AUTH_VISIBLE":
            return {...state, authorizationIsVisible: payload};
        case "SET_USER_AFTER_LOGIN":
            return {...state, user: payload, userAuthorized: true};
        case "USER_LOGOUT":
            return {...state, user: {}, userAuthorized: false};
        default:
            return state;
    }
}