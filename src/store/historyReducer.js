const defaultState = {
    historyBadges:[],
}

export const historyReducer = (state=defaultState, {type, payload}) => {
    switch(type) {
        case "HISTORY_INIT":
            return {...state, historyBadges: payload};
        case "ADD_HISTORY":
            const newHistory = [...state.historyBadges];
            let hasBadge = false;

            state.historyBadges.forEach(function(badge){
                if(badge.id === payload.id){
                    hasBadge = true;
                }
            })

            if(!hasBadge){
                newHistory.unshift(payload);
            }
            
            if(newHistory.length > 4) {
                newHistory.pop();
            }
            return {...state, historyBadges: newHistory}
        default:
            return state;
    }
}