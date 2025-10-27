import React from "react";
import { useCart } from "../context/CartContext";
import "../styles/cart.css";

export default function Cart() {
  const { cartItems, removeFromCart, clearCart, total } = useCart();

  return (
    <div className="cart-page">
      <h2>🛍️ Carrinho</h2>

      {cartItems.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>Qtd: {item.qty}</p>
                  <p>R$ {(item.price * item.qty).toFixed(2)}</p>
                  <button onClick={() => removeFromCart(item.id)}>Remover</button>
                </div>
              </li>
            ))}
          </ul>

          <div className="cart-total">
            <strong>Total: R$ {total.toFixed(2)}</strong>
            <button onClick={clearCart}>Esvaziar</button>
          </div>
        </>
      )}
    </div>
  );
}
