import React from 'react';
import './styles.scss';

function Prices({ data }) {
    return (
            <div className="product__info__prices">
                {
                    (data.on_sale) 
                    ? (
                        <div className="discount">
                            <div>
                            <label className="discount__regularprice">{data.regular_price}</label>
                            <label className="discount__percentage"> -{data.discount_percentage}</label>
                            </div>

                            <label>{data.actual_price}</label>
                        </div>
                    )
                    : (
                        <div className="notdiscount">   
                            <p>{data.regular_price}</p>
                        </div>
                    )
                }
            </div>
    )
}

export default Prices;