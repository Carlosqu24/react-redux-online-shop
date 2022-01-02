import React from 'react'

import { useDispatch } from 'react-redux'
import { deleteCartItem, incrementQuantityCartItem, decrementQuantityCartItem } from '../../actions/shoppingCartActions';

import './CartProduct.css'

export const CartProduct = ({ id, name, description, price, quantity, gender, imageURL }) => {
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
                        <span className="product-card__gender" >{ gender }</span>
                        <span className="product-card__price" >${ price }</span>
                        <span className="product-card__quantity" >{ quantity }</span>

                        <div className="quantity-actions">
                              <button 
                                    onClick={() => dispatch(incrementQuantityCartItem(id))}
                                    className="btn btn--quantity-actions"
                              >+</button>
                              <button 
                                    onClick={() => dispatch(decrementQuantityCartItem(id))}
                                    className="btn btn--quantity-actions"
                              >-</button>
                        </div>

                        <p>{ description }</p>
                        <button
                              className="btn product-card__btn"
                              onClick={() => dispatch(deleteCartItem(id))}
                        >Delete to cart</button>
                  </div>
            </div>
      )
}

