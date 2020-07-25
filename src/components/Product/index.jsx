import React from 'react';

// import Sizes from './Sizes';
import Prices from './Prices';
import Seal from './Seal';

import './styles.scss';


function Product({ data, handleOnClick }) {
    return (
        <>
            <div className="product" onClick={() => handleOnClick(data)}>
                <div>
                {
                    (data.image.length > 0) 
                    ? (<img src={data.image} alt="" className="product__img"/>)
                    : (
                        <div className="notimage">
                            <p>Imagem indisponível</p>
                        </div>
                    )
                }
                </div>
                

                <div className="product__info">
                    <Seal data={data}/>                    
                    <span className="product__info__title">{data.name}</span>
                    <Prices data={data}/>
                </div>
            </div>
        </>    
        ) 
}

export default Product;