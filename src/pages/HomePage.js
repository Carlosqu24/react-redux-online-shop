import React from 'react'

import { FilterCategories } from '../components/FilterCategories'
import { ProductsGrid } from '../components/ProductsGrid'

export const HomePage = () => {
      return (
            <>
                  <FilterCategories /> 
                  <ProductsGrid />
            </>
      )
}
