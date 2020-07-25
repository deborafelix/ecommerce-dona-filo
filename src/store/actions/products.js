const types = {
    FETCH_PRODUCTS: 'FETCH_PRODUCTS',
    SET_ITEM: 'SET_ITEM'
}

export const fetchProducts = ( data ) => ({ type: types.FETCH_PRODUCTS, data});

export const setItem = ( data ) => ({ type: types.SET_ITEM, data});