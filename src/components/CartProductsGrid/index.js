import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { resetCart } from '../../actions/shoppingCartActions';

import { CartProduct } from '../CartProduct'

import './CartProductsGrid.css'

export const CartProductsGrid = () => {
      const shoppingCart = useSelector(state => state.shoppingCart);
      const dispatch = useDispatch();

      return (
            <div>
                  <button
                        className="btn"
                        onClick={() => dispatch(resetCart())}
                  >Reset Cart</button>

                  <div className="grid grid--shopping-cart">
                        {
                              shoppingCart.map(item => (
                                    <CartProduct
                                          key={item._id}
                                          id={item._id}
                                          name={item.name}
                                          description={item.description}
                                          price={item.price}
                                          quantity={item.quantity}
                                          gender={item.gender}
                                          imageURL={item.imageURL}
                                    />
                              ))
                        }
                  </div>
            </div>
      )
}
