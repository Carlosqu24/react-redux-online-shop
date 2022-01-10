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

            console.log(form)

            const res = await fetch(`http://localhost:9000/products${formatUrlParams(form)}`)
            const data = await res.json()

            dispatch(setProducts(data));
      };

      // const filterItems = [
      //       {
      //             id: 1,
      //             name: 'Gender',
      //             options: [{
      //                               id: new Date().getTime(),
      //                               title: 'All'
      //                         }, {
      //                               id: new Date().getTime(),
      //                               title: 'Male'
      //                         }, {
      //                               id: new Date().getTime(),
      //                               title: 'Female'
      //                         }]
      //       },
      //       {
      //             id: 2,
      //             name: 'Type',
      //             options: ['All', 'Shoe', 'Shirt']
      //       },
      //       {
      //             id: 3,
      //             name: 'Category',
      //             options: ['All', 'Sport']
      //       }
      // ]

      return (
            <form className="form-filter" onSubmit={handleSubmit}>
                  <h2>Filter</h2>

                  <div className="form-filter-groups">
                        <div className="filter-group">
                              <h3>Gender</h3>
                              <select 
                                    name="gender"
                                    onChange={handleInputChange}
                              >
                                    <option value="all">All</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                              </select>
                        </div>

                        <div className="filter-group">
                              <h3>Type</h3>
                              <select 
                                    name="type"
                                    onChange={handleInputChange}
                              >
                                    <option value="all">All</option>
                                    <option value="shoe">Shoe</option>
                                    <option value="shirt">Shirt</option>
                              </select>
                        </div>

                        <div className="filter-group">
                              <h3>Minimun Price</h3>
                              <div className="form-group">
                                    <input
                                          type="number"
                                          name="price"
                                          min="100"
                                          max="1000"
                                          onChange={handleInputChange}
                                    />
                                    
                              </div>
                        </div>

                        <div className="filter-group">
                              <h3>Category</h3>
                              <select 
                                    name="category"
                                    onChange={handleInputChange}
                              >
                                    <option value="all">All</option>
                                    <option value="sport">Sport</option>
                                    <option value="casual">Casual</option>
                              </select>
                        </div>

                        {/* {
                              filterItems.map(item => (
                                    <div className="filter-group">
                                          <h3>{item.name}</h3>

                                          <select 
                                                name={item.name.toLowerCase()} 
                                                key={item.id}
                                                onChange={handleInputChange}
                                          >
                                                {
                                                      item.options.map(option => (
                                                            <option 
                                                                  key={new Date().getTime()}
                                                                  value={option.title.toLowerCase()}
                                                            >
                                                                  { option }
                                                            </option>
                                                      ))
                                                }
                                          </select>
                                    </div>
                              ))
                        } */}
                  </div>





                  <button className="btn" type='submit' >Filter</button>
            </form>
      )
}
