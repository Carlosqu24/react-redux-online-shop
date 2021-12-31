import React from 'react'

import './CartProduct.css'

export const CartProduct = ({ name, description, price, quantity, gender, imgUrl }) => {
      return (
            <div className="product-card">
                  <img 
                        src={ imgUrl } 
                        className="product-card__img"
                        alt={ name } 
                  />
                  
                  <div className="product-card__body">
                        <h2 className="product-card__name">{ name }</h2>
                        <span
                              className="product-card__gender"
                        >{ gender }</span>
                        <span 
                              className="product-card__price"
                        >${ price }</span>
                        <span 
                              className="product-card__quantity"
                        >{ quantity }</span>
                        <p>{ description }</p>
                        <button
                              className="btn product-card__btn"

                        >Add to cart</button>
                  </div>
            </div>
      )
}

