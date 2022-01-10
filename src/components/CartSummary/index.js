import React from 'react'

import { useSelector } from 'react-redux'

import './CartSummary.css'

export const CartSummary = () => {
      const shoppingCart = useSelector(state => state.shoppingCart)

      const calculateTotalAmount = () => {
            const allPrices = shoppingCart.map(item => item.quantity * item.afterTaxPrice);

            return allPrices.reduce((prev, current) => prev + current, 0);
      };

      const handleCheckout = async () => {
            
            const options = {
                  method: 'POST',
                  headers: {
                        'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                        userId: "2 test",
                        status: "processed",
                        products: shoppingCart,
                        totalAmount: calculateTotalAmount(),
                        shippingAddress: {
                              country: "CR",
                              province: "San José",
                              canton: "Pérez Zeledón"
                        }
                  })
            };

            const res = await fetch('http://localhost:9000/orders/add-order', options);
            const data = await res.json();

            console.log(data);
      };

      return (
            <div className="cart-summary">
                  <h2>Summary</h2>
                  <p>Total: ${ calculateTotalAmount() }</p>
                  <button 
                        className="btn"
                        onClick={handleCheckout}      
                  >Checkout</button>
            </div>
      )
}
