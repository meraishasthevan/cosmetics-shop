import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity } from './cartSlice';
import './CartPage.css';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart); 
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleQuantityChange = (id, amount) => {
    dispatch(updateQuantity({ id, quantity: amount }));
  };

  const handleProceed = () => {
    setShowForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your product is successfully added');
    setShowForm(false);

    setFormData({ name: '', email: '' });
  };

  if (!Array.isArray(cartItems)) {
    console.error('Cart items should be an array but got:', cartItems);
    return <div>Error: Cart items are not available.</div>;
  }

  const totalPrice = cartItems.reduce((total, item) => {
  
    const price = parseFloat(item.Price) || 0;
    const quantity = parseInt(item.quantity, 10) || 0;
    return total + (price * quantity);
  }, 0);
  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} className="cart-item-img" />
            <div className="cart-item-details">
              <h3>{item.title}</h3>
              <p>Price: ₹{item.Price}</p>
              <div className="quantity-control">
                <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
              </div>
            </div>
            {/* <button onClick={() => dispatch(removeFromCart(item.id))} className="remove-button">Remove</button> */}
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h2>Total Price: ₹{totalPrice.toFixed(2)}</h2>
        <button onClick={handleProceed} className="proceed-button">Proceed</button>
      </div>
      {showForm && (
        <div className="order-form">
          <h2>Enter your details</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
            </label>
            <label>
              Email:
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CartPage;
