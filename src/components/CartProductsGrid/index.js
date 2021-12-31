import React from 'react'

import { CartProduct } from '../CartProduct'

const products = [
      {
            id: 1,
            name: "Nike Air Max Plus",
            description: "Descripción 1",
            gender: "Male",
            price: "300",
            quantity: 1,
            imgUrl: "https://static.nike.com/a/images/t_default/go9ejlsilpz2hq0eophu/calzado-air-max-plus-x9G2xF.png"
      },
      {
            id: 2,
            name: "RN Flyknit 2018",
            description: "Descripción 2",
            gender: "Male",
            price: "400",
            quantity: 1,
            imgUrl: "https://static.nike.com/a/images/t_default/nbpjithlmzffr22w2eee/free-rn-flyknit-2018-mens-running-shoes-RRT9elMk.png"
      },
      {
            id: 3,
            name: "Nike Air Zoom Pegasus 37",
            description: "Descripción 3",
            gender: "Female",
            price: "450",
            quantity: 1,
            imgUrl: "https://static.nike.com/a/images/t_default/5633f7ed-b4a8-45b6-82a9-449e997f7794/calzado-de-running-para-carretera-air-zoom-pegasus-37-Jl0bDf.png"
      }
]

export const CartProductsGrid = () => {
      return (
            <div className="products-grid">
            {
                  products.map(item => (
                        <CartProduct
                              key={item.id}
                              name={item.name}
                              description={item.description}
                              price={item.price}
                              quantity={item.quantity}
                              gender={item.gender}
                              imgUrl={item.imgUrl}
                        />
                  ))
            }
      </div>
      )
}
