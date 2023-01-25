import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { Link } from 'react-router-dom';
import '../App.css';
import { addToCart, clearCart, decreaseCart, getTotals, removeFromCart } from '../features/cartSlice';




function Cart() {

  const cart = useSelector((state) => state.cart);
  console.log(`cart`, cart)
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);


  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  }

  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  }

  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  }

  const handleClearCart = () => {
    dispatch(clearCart());
  }



  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is currently empty</p>
          <div className="start-shopping">
            <Link to="/">
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>

      ) : (
        <div>
          <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="quantity">Quantity</h3>
            <h3 className="total">Total</h3>
          </div>

          <div className="cart-items">
            {cart.cartItems?.map(cartItem => (
              <div className="cart-item" key={cartItem.id}>
                <div className="cart-product">
                  <div>
                    <h3>{cartItem.service}</h3>
                    <p>{cartItem.service}</p>
                    <button onClick={() => handleRemoveFromCart(cartItem)}>Remove</button>
                  </div>
                </div>
                <div className="cart-product-price">
                  ${cartItem.price}
                </div>
                <div className="cart-product-quantity">
                  <button onClick={() => handleDecreaseCart(cartItem)}>-</button>
                  <div className="count">{cartItem.cartQuantity}</div>
                  <button onClick={() => handleIncreaseCart(cartItem)}>+</button>
                </div>

                <div className="cart-product-total-price">
                  ${cartItem.price * cartItem.cartQuantity}
                </div>

              </div>
            ))}
          </div>
          <div className="cart-summary">
            <button className="clear-cart" onClick={() => handleClearCart()}>Clear Cart</button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">${cart.cartTotalAmount}</span>
              </div>
              <p>taxes calculated at checkout</p>
              <button>Check out</button>
              <div className="continue-shopping">
                <Link to="/">
                  <span>Continue Shopping</span>
                </Link>
              </div>

            </div>
          </div>

        </div>
      )}
    </div>
  );
};

export default Cart;