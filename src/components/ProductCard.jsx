import React from "react";
import { useCart } from "../context/CartContext";

export default function ProductCard({ id, name, price, image }) {
  const { addToCart } = useCart();
  const priceFmt = price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  return (
    <article className="card">
      <div className="thumb-wrap">
        <img src={image} alt={name} loading="lazy" />
      </div>
      <h3>{name}</h3>
      <p className="price">{priceFmt}</p>
      <button
        className="btn-add"
        onClick={() => addToCart({ id, name, price, image })}
      >
        Adicionar ao Carrinho
      </button>
    </article>
  );
}
