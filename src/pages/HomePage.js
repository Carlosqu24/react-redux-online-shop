import React from 'react'

import './HomePage.css'

import { FilterCategories } from '../components/FilterCategories'
import { ProductsGrid } from '../components/ProductsGrid'

export const HomePage = () => {
      return (
            <div className='home-page'>
                  <FilterCategories /> 
                  <ProductsGrid />
            </div>
      )
}
