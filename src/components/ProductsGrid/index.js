import React from 'react'
import { Product } from '../Product'

import './ProductsGrid.css'

const products = [
      {
            id: 1,
            name: "Nike Air Max Plus",
            description: "Descripción 1",
            gender: "Male",
            price: 200,
            imgUrl: "https://static.nike.com/a/images/t_default/go9ejlsilpz2hq0eophu/calzado-air-max-plus-x9G2xF.png"
      },
      {
            id: 2,
            name: "RN Flyknit 2018",
            description: "Descripción 2",
            gender: "Male",
            price: 250,
            imgUrl: "https://static.nike.com/a/images/t_default/nbpjithlmzffr22w2eee/free-rn-flyknit-2018-mens-running-shoes-RRT9elMk.png"
      },
      {
            id: 3,
            name: "Nike Air Zoom Pegasus 37",
            description: "Descripción 3",
            gender: "Female",
            price: 300,
            imgUrl: "https://static.nike.com/a/images/t_default/5633f7ed-b4a8-45b6-82a9-449e997f7794/calzado-de-running-para-carretera-air-zoom-pegasus-37-Jl0bDf.png"
      },
      {
            id: 4,
            name: "Nike Air Zoom Pegasus 37",
            description: "Descripción 4",
            gender: "Female",
            price: 350,
            imgUrl: "https://static.nike.com/a/images/t_default/81863d87-25de-4521-a419-6258ac8f5742/flex-experience-run-10-road-running-shoes-dw002X.png"
      }
]

export const ProductsGrid = () => {
      return (
            <div className="grid">
                  {
                        products.map(item => (
                              <Product
                                    key={item.id}
                                    product={item}
                              />
                        ))
                  }
            </div>
      )
}
