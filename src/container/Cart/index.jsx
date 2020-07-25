import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, removeAnItem } from '../../store/actions';

import CartItem from '../../components/CartItem';

import './styles.scss';

function Cart() {
    const { cart } = useSelector(store => store);
    const dispatch = useDispatch();

    const handleOnRemoveAnItem = (item) => {
        if (item.qty > 1) return dispatch(removeAnItem(item));
        return handleOnDeleteItem(item);
    
    }

    const handleOnDeleteItem = (item) => {
        dispatch(removeItem(item));
    }

    const handleOnAddItem = (item) => {
        dispatch(addItem(item));
    }

    return (
        <article className="container__cart">
            <div className="cart__header">
                <h1>Carrinho</h1>
                <h1> Subtotal: R$ {cart.value.toFixed(2)} </h1> 
            </div>
            <hr className="line"/>

            { cart && cart.list.map((item, i) => <CartItem 
                handleOnAddItem={handleOnAddItem}
                handleOnDeleteItem={handleOnDeleteItem} 
                handleOnRemoveAnItem={handleOnRemoveAnItem} 
                key={i} 
                data={item}/>) }
        </article>
    )
}

export default Cart;
