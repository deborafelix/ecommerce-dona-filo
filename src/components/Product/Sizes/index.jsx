import React from 'react';

import './styles.scss';

function Sizes( { data, handleSizeSelected}) {

    return (
        <div className="sizes">
             <div className="sizes__block">
                { data.sizes.map((sizes, i) => 
                (
                <React.Fragment key={i}>
                    <input
                        disabled={!sizes.available}
                        name="radio" 
                        onChange={({ target }) => handleSizeSelected(target)}
                        type="radio" 
                        id={sizes.size} 
                        value={sizes.size} 
                        className="size__input" /> 
                    <label 
                        className={ sizes.available ? "size" : "nosize"} 
                        htmlFor={sizes.size}>
                        {sizes.size}
                    </label>
                </React.Fragment >)) }
             </div>
        </div>
    )
}

export default Sizes;
