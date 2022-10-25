import React from 'react'
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import { useSelector } from 'react-redux';

function NavBar() {
  const cart = useSelector((state) => state.cart);
  console.log(cart)
  return (
    <nav className='nav-bar'>
      <Link to="/">
        <h2>YAY</h2>
      </Link>
      <Link to="/cart">
        <div className="nav-bar">
          <Icon name="cart" />
          <span className="bag-quantity">
            <span>{cart.cartItems.reduce((x, y) => x + y.cartQuantity, 0)}</span>
            <span>3</span>
          </span>
        </div>
      </Link>

    </nav>
  )
}

export default NavBar