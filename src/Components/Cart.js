import React from 'react'
import kettle from '../data/assets/kettle.png'

const Cart = ({ basket, showCart, onClickHandler, onDeleteHandler }) => {
    const basketAmount = basket.length > 1 ? 'items' : 'item'
    const totalPrice = basket.reduce((total, product) => total + product.price, 0);
    console.log(totalPrice.toFixed(1))

    return (
        <div className={showCart ? 'shopping-cart show hide' : 'hide'}>
            <h2>Cart: {basket.length} {basketAmount}</h2>
            <div className="cart-items">
                {basket.map(product => {
                    return (
                        <div className="item" key={product.productId}>
                            <img src={kettle} alt={product.title} />
                            <div className="text">
                                <p><strong>{product.title}</strong> - <span className="sku">{product.sku}</span></p>
                                <h2>£{product.price}</h2>
                            </div>
                            <div className="add-more">
                                <button onClick={(e) => onDeleteHandler(product.productId)}>Delete</button>
                            </div>
                        </div>
                    )
                })}
            </div>
            <h2>Total: £{totalPrice.toFixed(1)}</h2>
        </div >
    )
}

export default Cart;