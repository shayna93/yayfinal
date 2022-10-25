import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import '../App.css';




function Cart() {
  const cart = useSelector((state) => state.cart);
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
                    <h3>{cartItem.name}</h3>
                    <p>{cartItem.description}</p>
                    <button>Remove</button>
                  </div>
                </div>
                <div className="cart-product-price">
                  ${cartItem.price}
                </div>
                <div className="cart-product-quantity">
                  <button>-</button>
                  <div className="count">{cartItem.cartQuantity}</div>
                  <button>+</button>
                </div>

                <div className="cart-product-total-price">
                  ${cartItem.price * cartItem.cartQuantity}
                </div>

              </div>
            ))}
          </div>
          <div className="cart-summary">
            <button className="clear-cart">Clear Cart</button>
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