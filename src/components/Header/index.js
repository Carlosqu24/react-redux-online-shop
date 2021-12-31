import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

export const Header = () => {
      return (
            <header className="header">
                  <div className="container">
                        <h2>Online Shop</h2>

                        <nav className="navbar">
                              <Link className="navbar__link" to='/' >Products</Link>
                              <Link className="navbar__link" to='/cart' >Cart</Link>
                        </nav>
                  </div>
            </header>
      )
}
