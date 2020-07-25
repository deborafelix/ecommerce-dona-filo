import React, { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux';

import { addNewItem, addItem } from '../../store/actions';
import Prices from '../../components/Product/Prices';
import Sizes from '../../components/Product/Sizes'

import './styles.scss'


function Item() {
    const { products, cart } = useSelector(store => store);
    const [ selectedSize, setSelectedSize] = useState();
    const { item } = products;
    
    const dispatch = useDispatch();

    const hasItem = (tempItem) => {
        return cart.list.find(item => item.name === tempItem.name && item.selectedSize === selectedSize);
    } 
    const handleSizeSelected = (target) => {
        setSelectedSize(target.value);
    }

    const handleOnAddCart = () => {
        const currentPrice = item.actual_price
            .split('R$ ')[1]
            .replace(',', '.');
        const newItem = {...item, selectedSize, actual_price: parseFloat(currentPrice)}
        if(hasItem(item)) return dispatch(addItem(newItem));
        return dispatch(addNewItem({...newItem, qty: 1 }));
    }

    return (
        <div className="container__item">
        {
            (item.image && item.image.length > 0) 
            ? (<img src={item.image} alt="" className="item__img"/>)
            : (
                <div className="item__noimg">
                    <p>Imagem indisponível</p>
                </div>
            )
        }
            <div className="item__info">
                <span className="item__title">{item.name}</span>
                <Prices data={item}/>
                <span className="item__installments">{item.installments}</span>
                <Sizes handleSizeSelected={handleSizeSelected} data={item}/>

                <button onClick={handleOnAddCart} disabled={!selectedSize} className="item__addbag">
                    Adicionar na sacola
                </button>
            </div>
        </div>
    )
}

export default Item;
