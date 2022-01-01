import React from 'react'

import { useSelector } from 'react-redux'

import './CartSummary.css'

export const CartSummary = () => {
      const shoppingCart = useSelector(state => state.shoppingCart)
      
      const calculateTotalAmount = () => {
            const allPrices = shoppingCart.map(item => item.quantity * item.price);

            return allPrices.reduce((prev, current) => prev + current, 0);
      };

      return (
            <div className="cart-summary">
                  <h2>Summary</h2>
                  <p>Total: ${ calculateTotalAmount() }</p>
                  <button className="btn">Checkout</button>
            </div>
      )
}
