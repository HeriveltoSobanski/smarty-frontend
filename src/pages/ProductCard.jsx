import React from "react";

export default function ProductCard({ nome, preco, imagem, onAdd }) {
  return (
    <div className="product-card" onClick={onAdd}>
      <img src={imagem} alt={nome} />
      <h4>{nome}</h4>
      <p>R$ {preco.toFixed(2)}</p>
    </div>
  );
}
