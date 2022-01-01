import React from 'react'

import { CartProductsGrid } from '../components/CartProductsGrid'
import { CartSummary } from '../components/CartSummary'

import './CartPage.css'

export const CartPage = () => {
      return (
            <>
                  <CartSummary />
                  <CartProductsGrid />
            </>
      )
}
