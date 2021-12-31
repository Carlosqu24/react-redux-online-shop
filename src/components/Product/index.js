import React from 'react'

import './Product.css'

export const Product = ({ name, description, gender, imgUrl }) => {
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
                        <p>{ description }</p>
                        <button
                              className="btn product-card__btn"

                        >Add to cart</button>
                  </div>
            </div>
      )
}
