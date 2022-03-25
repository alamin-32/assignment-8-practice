import React from 'react';
import './Product.css'

const Product = (props) => {
    const { img, name, seller, ratings, price } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p>{ name}</p>
                <p>Price: ${ price}</p>
                <p>Seller: { seller}</p>
                <p>Ratings: {ratings} stars</p>
            </div>
            <button className='cart-btn'>
                <p>Add To Cart</p>
             </button>
        </div>
    );
};

export default Product;