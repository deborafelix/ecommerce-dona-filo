import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './styles.scss';
import { RiShoppingBag3Line } from 'react-icons/ri';



function Header() {

    const history = useHistory();
    const { cart } = useSelector(store => store);
    const [ qtyItem, setQtyItem ] = useState(0);

    const handleOnClickCart = () => {
        history.push('/cart');
    };

    useEffect(() => {
        if (cart) setQtyItem(cart.list.length);
    }, [cart])


    return (
        <section className="container">
            <div className="header">
                <Link to="">
                    <h1>Donna Filó</h1>            
                </Link>
                <div className="header__icons"> 
                    <div onClick={handleOnClickCart} className="header__cart">
                        <RiShoppingBag3Line  
                            size={25} 
                            className="header__icon" />
                        <span className="header__cart__qty">{ qtyItem }</span>
                    </div>
                </div>
            </div>
            
        </section>
        
    );
}

export default Header;
