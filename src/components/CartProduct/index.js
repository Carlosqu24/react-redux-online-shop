import React from 'react'

import { useDispatch } from 'react-redux'
import { deleteCartItem, incrementQuantityCartItem, decrementQuantityCartItem } from '../../actions/shoppingCartActions';

import './CartProduct.css'

export const CartProduct = ({ id, name, price, quantity, imageURL }) => {
      const dispatch = useDispatch();

      return (
            <div className="card">
                  <img 
                        src={ imageURL } 
                        className="card__img"
                        alt={ name } 
                  />
                  
                  <div className="card__body">
                        <h2 className="product-card__name">{ name }</h2>
                        <span className="product-card__price" >${ price }</span>
                        <div className="quantity-actions">
                              <button 
                                    onClick={() => dispatch(incrementQuantityCartItem(id))}
                                    className="btn btn--quantity-actions"
                              >+</button>
                              <span className="product-card__quantity" >{ quantity }</span>
                              <button 
                                    onClick={() => dispatch(decrementQuantityCartItem(id))}
                                    className="btn btn--quantity-actions"
                              >-</button>
                        </div>
                        <button
                              className="btn product-card__btn"
                              onClick={() => dispatch(deleteCartItem(id))}
                        >Delete to cart</button>
                  </div>
            </div>
      )
}

