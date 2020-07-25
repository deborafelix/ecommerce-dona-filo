import React from 'react'
import './styles.scss';

function Seal({ data }) {
    return (
        <div>
        {
            (data.on_sale) 
            ? (
                <div className="onsale">
                    <h1>PROMOÇÃO</h1>
                </div>
            )
            : (
                <div className="notsale" />
            )
        }
        </div>
    )
}

export default Seal;
