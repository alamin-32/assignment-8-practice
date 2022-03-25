import React from 'react';
import logo from '../../images/Logo.svg'
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav className='navbar'>
                <img src={logo} alt="" />
                <div>
                   <a href="/shop">Shop</a>
                   <a href="/orders">Orders</a>
                   <a href="/inventory">Inventory</a>
                   <a href="/about">About</a>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;