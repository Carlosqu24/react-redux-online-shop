import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setProducts } from '../../actions/productsActions';

import { Product } from '../Product'

import './ProductsGrid.css'

export const ProductsGrid = () => {
      const products = useSelector(state => state.products);
      const dispatch = useDispatch();

      useEffect(() => {
            const getAllProducts = async () => {
                  const res = await fetch('http://localhost:9000/products');
                  const data = await res.json();

                  dispatch(setProducts(data))
            };

            getAllProducts()

      }, []);

      return (
            <div className="grid grid--products">
                  {
                        products.map(item => (
                              <Product
                                    key={item._id}
                                    product={item}
                              />
                        ))
                  }
            </div>
      )
}
