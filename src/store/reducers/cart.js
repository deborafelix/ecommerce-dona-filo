const INITIAL_STATE = {
    list: [],
    value: 0,
}

const cart = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'ADD_NEW_ITEM':
            return {...state, list: [...state.list, action.data], value: state.value + action.data.actual_price};
        case 'ADD_ITEM':
            return {
                ...state, 
                list: state.list.map(item => {
                    if (item.name === action.data.name && item.selectedSize === action.data.selectedSize) item.qty++;
                        return item;
                }), 
                value: state.value + action.data.actual_price
            };
        case 'REMOVE_AN_ITEM':{
            return {
                ...state, 
                list: state.list.map(item => {
                    if (item.name === action.data.name && item.selectedSize === action.data.selectedSize) item.qty--;
                        return item;
                }), 
                value: state.value - action.data.actual_price,
                };
        }
        case 'REMOVE_ITEM':
            return {
                ...state, 
                list: state.list
                    .filter(item => !(item.name === action.data.name && item.selectedSize ===  action.data.selectedSize)),
                value: state.value - (action.data.actual_price * action.data.qty),
                };
        default:
            return state;
    }
}

export default cart;