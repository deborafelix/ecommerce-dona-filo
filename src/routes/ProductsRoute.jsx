import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchProducts } from '../store/actions';

import Products from '../container/Products';
import { database } from '../utils/database';


function ProductsRoute() {
    const  products = useSelector(store => store.products);
    const dispatch = useDispatch();
    
    useEffect(() => {
        const fetchProductsAPI = () => {
            dispatch(fetchProducts(database));
        }

        fetchProductsAPI();
    }, [dispatch])


    return (
        <>
            { products && <Products products={products} />}

        </>
    );
}

export default ProductsRoute;