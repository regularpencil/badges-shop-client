const defaultState = {
    filteredBadges:[],
    materialFilters: [],
    typeFilters: [],
}

export const filterReducer = (state = defaultState, {type, payload}) => {

    switch(type) {
        case "FILTER_BADGES_INIT":
            return {...state, filteredBadges: payload};
        case "ADD_MATERIAL_FILTER":
            return {...state, materialFilters: [...state.materialFilters, payload]};

        case "REMOVE_MATERIAL_FILTER": 
            const newMaterialFilters = state.materialFilters.filter(function(item){
                if(item !== payload){
                    return item;
                }
            })
            return {...state, materialFilters: newMaterialFilters};

        case "ADD_TYPE_FILTER":
            return {...state, typeFilters: [...state.typeFilters, payload]};

        case "REMOVE_TYPE_FILTER": 
            const newTypeFilters = state.typeFilters.filter(function(item){
                if(item !== payload){
                    return item;
                }
            })
            return {...state, typeFilters: newTypeFilters};
        case"CLEAR_FILTERS":
            return {...state, typeFilters:[], materialFilters: []};
        default:
            return state;
    }
}