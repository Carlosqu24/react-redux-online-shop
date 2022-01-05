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

      return (
            <form className="form-filter" onSubmit={handleSubmit}>
                  <h2>Filter</h2>

                  <div className="form-filter-groups">
                        <div className="filter-group">
                              <h3>Gender</h3>
                              <div className="form-group">
                                    <label htmlFor="gender">All</label>
                                    <input
                                          type="radio"
                                          name="gender"
                                          value="all"
                                          onChange={handleInputChange}
                                    />
                              </div>

                              <div className="form-group">
                                    <label htmlFor="gender">Male</label>
                                    <input
                                          type="radio"
                                          name="gender"
                                          value="male"
                                          onChange={handleInputChange}
                                    />
                              </div>

                              <div className="form-group">
                                    <label htmlFor="gender">Female</label>
                                    <input
                                          type="radio"
                                          name="gender"
                                          value="female"
                                          onChange={handleInputChange}
                                    />
                              </div>
                        </div>

                        <div className="filter-group">
                              <h3>Type</h3>
                              <div className="form-group">
                                    <label htmlFor="type">All</label>
                                    <input
                                          type="radio"
                                          name="type"
                                          value="all"
                                          onChange={handleInputChange}
                                    />
                              </div>

                              <div className="form-group">
                                    <label htmlFor="type">Shoe</label>
                                    <input
                                          type="radio"
                                          name="type"
                                          value="shoe"
                                          onChange={handleInputChange}
                                    />
                              </div>

                              <div className="form-group">
                                    <label htmlFor="type">Shirt</label>
                                    <input
                                          type="radio"
                                          name="type"
                                          value="shirt"
                                          onChange={handleInputChange}
                                    />
                              </div>
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
                                    {/* <p>Min price: ${form.price}</p> */}
                              </div>
                        </div>

                        <div className="filter-group">
                              <h3>Category</h3>
                              <div className="form-group">
                                    <input
                                          type="text"
                                          name="category"
                                          onChange={handleInputChange}
                                    />
                                    {/* <p>Min price: ${form.price}</p> */}
                              </div>
                        </div>
                  </div>

                  

                  

                  <button className="btn" type='submit' >Filter</button>
            </form>
      )
}
