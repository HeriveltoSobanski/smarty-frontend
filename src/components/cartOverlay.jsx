import React from "react";
import { useCart } from "../context/CartContext";
import "../styles/cart.css";

export default function CartOverlay() {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    total,
    isCartOpen,
    toggleCart,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="cart-overlay">
      <div className="cart-container">
        <div className="cart-header">
          <h2>🛍️ Seu Carrinho</h2>
          <button className="close-btn" onClick={toggleCart}>
            ✖
          </button>
        </div>

        {cartItems.length === 0 ? (
          <p className="empty">Seu carrinho está vazio.</p>
        ) : (
          <>
            <ul className="cart-list">
              {cartItems.map((item) => (
                <li key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div className="cart-info">
                    <h3>{item.name}</h3>
                    <p>R$ {item.price.toFixed(2)}</p>
                    <div className="qty-control">
                      <button onClick={() => removeFromCart(item.id)}>-</button>
                      <span>{item.qty}</span>
                      <button onClick={() => addToCart(item)}>+</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="cart-footer">
              <strong>Total: R$ {total.toFixed(2)}</strong>
              <div className="footer-buttons">
                <button className="clear-btn" onClick={clearCart}>
                  Esvaziar
                </button>
                <button className="checkout-btn">Finalizar</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
