import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setProducts } from '../../actions/productsActions';

import { formatUrlParams } from '../../utils/paramsUtils';

import './FilterCategories.css'

export const FilterCategories = () => {
      const [form, setForm] = useState(null)

      const dispatch = useDispatch();

      const handleInputChange = async (e) => {

            setForm({ ...form, [e.target.name]: e.target.value })
      };

      const handleSubmit = async (e) => {
            e.preventDefault();

            const res = await fetch(`http://localhost:9000/products${formatUrlParams(form)}`)
            const data = await res.json()

            dispatch(setProducts(data));
      };

      const filterItems = [
            {
                  id: 1,
                  name: 'Gender',
                  options: [{
                                    id: 1,
                                    title: 'All'
                              }, {
                                    id: 2,
                                    title: 'Male'
                              }, {
                                    id: 3,
                                    title: 'Female'
                              }]
            },
            {
                  id: 2,
                  name: 'Type',
                  options: [{
                                    id: 1,
                                    title: 'All'
                              }, {
                                    id: 2,
                                    title: 'Shoe'
                              }, {
                                    id: 3,
                                    title: 'Shirt'
                              }]
            },
            {
                  id: 3,
                  name: 'Category',
                  options: [{
                                    id: 1,
                                    title: 'All'
                              }, {
                                    id: 2,
                                    title: 'Sport'
                              }, {
                                    id: 3,
                                    title: 'Casual'
                              }]
            }
      ]

      return (
            <form className="form-filter" onSubmit={handleSubmit}>
                  <h2>Filter</h2>

                  <div className="form-filter-groups">
                        {
                              filterItems.map(item => (
                                    <div key={item.id} className="filter-group">
                                          <h3>{item.name}</h3>

                                          <select 
                                                name={item.name.toLowerCase()} 
                                                key={item.id}
                                                className="form-control"
                                                onChange={handleInputChange}
                                          >
                                             {
                                                   item.options.map(option => (
                                                         <option 
                                                            key={option.id} 
                                                            value={option.title.toLowerCase()}
                                                      >
                                                               { option.title }
                                                         </option>
                                                   ))
                                             }
                                          </select>
                                    </div>
                              ))
                        }
                  </div>

                  <button className="btn" type='submit' >Filter</button>
            </form>
      )
}
