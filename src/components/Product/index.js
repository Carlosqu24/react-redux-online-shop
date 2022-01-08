import React from 'react'
import { useDispatch } from 'react-redux'
import { addCartItem } from '../../actions/shoppingCartActions';

import './Product.css'

export const Product = ({ product }) => {
      const dispatch = useDispatch();
      
      return (
            <div className="card">
                  <img 
                        src={ product.imageURL } 
                        className="card__img"
                        alt={ product.name } 
                  />
                  
                  <div className="card__body">
                        <h2 className="product-card__name">{ product.name }</h2>
                        
                        <div className="product-card__categories">
                              <span
                                    className="product-card__gender"
                              >{ product.gender }</span>

                              <span className="product-card__gender">{ product.type }</span>
                        </div>

                        <span className="product-card__price" >${ product.price }</span>
                        <button
                              className="btn product-card__btn"
                              onClick={() => dispatch(addCartItem(product))}
                        >Add to cart</button>
                  </div>
            </div>
      )
}
