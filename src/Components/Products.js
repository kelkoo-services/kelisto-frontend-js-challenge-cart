import React from 'react';
import Product from './Product'
const Products = ({ json, onClickHandler }) => {

    console.log(json)
    return (
        <div className="products container">
            {json.map(product => {
                return (
                    <Product product={product} onClickHandler={onClickHandler} />
                )
            })}
        </div >
    )
}

export default Products;