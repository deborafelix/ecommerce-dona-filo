const types = {
    ADD_NEW_ITEM: 'ADD_NEW_ITEM',
    ADD_ITEM: 'ADD_ITEM',
    REMOVE_AN_ITEM: 'REMOVE_AN_ITEM',
    REMOVE_ITEM: 'REMOVE_ITEM',
}

export const addNewItem = ( data ) => ({ type: types.ADD_NEW_ITEM, data});

export const addItem = ( data ) => ({ type: types.ADD_ITEM, data});

export const removeItem = ( data ) => ({ type: types.REMOVE_ITEM, data});

export const removeAnItem = ( data ) => ({ type: types.REMOVE_AN_ITEM, data});
