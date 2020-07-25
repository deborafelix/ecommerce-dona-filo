import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setItem } from '../../store/actions';

import Product from '../../components/Product';
import Search from '../../components/Search';


import './styles.scss';

function Products({ products }) {
    const [ filteredProducts, setFilteredProducts ] = useState(products.list)
    const dispatch = useDispatch();
    const history = useHistory();


    const handleItemSelected = (product) => {
        dispatch(setItem(product));
        history.push(`/item/${product.name}`);
    
    }

    const handleOnFilter = ({ target: t }) => {
        const filter = t.value.toLowerCase();
        setTimeout(() => {
            const tempProducts = products.list.filter(product => product.name.toLowerCase().includes(filter));
            setFilteredProducts(prev => (tempProducts));
        }, 500);
    }


    return (
        <>
            <div className="container__products">
            <Search handleOnChange={handleOnFilter}/>
                <div className="products">
                { filteredProducts.map((product, index) => <Product key={index} handleOnClick={handleItemSelected} data={product}/>) }
                </div>
            </div>
        </>
    );
}

export default Products;