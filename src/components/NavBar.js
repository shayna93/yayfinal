import React from 'react'
import {Link} from 'react-router-dom';
import { Icon } from 'semantic-ui-react'

function NavBar() {
  return (
    <nav className = 'nav-bar'>
        <Link to= "/">
        <h2>YAY</h2>
        </Link>
        <Link to="/cart">
        <div className="nav-bar">
            <Icon name="cart"/>
            <span className="bag-quantity">
                <span>3</span>
            </span>
        </div>
        </Link>
        
    </nav>
  )
}

export default NavBar