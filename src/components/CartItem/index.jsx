import React from 'react';

import { FiPlusSquare, FiMinusSquare } from 'react-icons/fi';
import { FaRegTrashAlt } from 'react-icons/fa';

import './styles.scss';


const CartItem = ({ data, handleOnDeleteItem, handleOnRemoveAnItem, handleOnAddItem  }) => {
    return(
        <>
            <section className="cart">
                <div>
                    {
                        (data.image.length > 0) 
                        ? (<img src={data.image} alt="" className="cart__img"/>)
                        : (
                            <div className="noimage">
                                <p>Imagem indisponível</p>
                            </div>
                        )
                    }
                </div>

                <div className="cart__info">
                    <p className="cart__title">{data.name}</p>

                    <div className="cart__info__price">
                        <label>{data.actual_price}</label>
                        <label>{data.installments}</label>
                    </div>
                <p className="cart__size">Tam. {data.selectedSize}</p>

                    <div>
                        <FiPlusSquare onClick={() => handleOnAddItem(data)} size={15} className="cart__icon" />
                        <span>  {data.qty}  </span>
                        <FiMinusSquare disabled={data.qty === 1} onClick={() => handleOnRemoveAnItem(data)} size={15} className="cart__icon" />
                    </div>
                </div>
                
                <div className="cart__trash">
                    <FaRegTrashAlt onClick={() => handleOnDeleteItem(data)} size={25} className="cart__icon" />
                </div>
            </section>
            <hr className="line"/>
        </>
    );
}

export default CartItem;