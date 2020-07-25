const INITIAL_STATE = {
    list: [],
    item: {},
}

const products = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'FETCH_PRODUCTS':
            return {...state, list: action.data};
        case 'SET_ITEM':
            return {...state, item: action.data};
        default:
            return state;
    }
}

export default products;