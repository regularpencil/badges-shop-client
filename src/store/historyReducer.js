const defaultState = {
    historyBadges:[],
}

export const historyReducer = (state=defaultState, {type, payload}) => {
    switch(type) {
        case "HISTORY_INIT":
            return {...state, historyBadges: payload};
        case "ADD_HISTORY":
            const newHistory = [...state.historyBadges];
            if(!newHistory.includes(payload)){
                newHistory.push(payload);
            }
            
            if(newHistory.length > 4) {
                newHistory.shift();
            }
            return {...state, historyBadges: newHistory}
        default:
            return state;
    }
}