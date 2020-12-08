import React from 'react'

import kettle from '../data/assets/kettle.png'

const Product = ({ product, onClickHandler }) => {

    return (
        < div className="product" key={product.productId}>
            <img src={kettle} alt={product.title} />
            <p><strong>{product.title}</strong> - <span className="sku">{product.sku}</span></p>
            <p>£{product.price}</p>
            <button onClick={(e) => onClickHandler(product)}>Add to Basket</button>
        </div>
    )
}

export default Product;