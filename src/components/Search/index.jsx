import React from 'react';
import './styles.scss';


function Search({ handleOnChange }) {
    return (
            <div class="form">
                <div class="form__group field">
                    <input type="input" class="form__field" placeholder="Pesquisar" name="name" id='name' onChange={handleOnChange} required />
                    <label for="name" class="form__label">Pesquisar</label>
                </div>
            </div>    
        ) 
}

export default Search;