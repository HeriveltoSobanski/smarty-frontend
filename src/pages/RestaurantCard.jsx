import React from "react";

export default function RestaurantCard({ nome, imagem }) {
  return (
    <div className="restaurant-card">
      <img src={imagem} alt={nome} />
      <p>{nome}</p>
    </div>
  );
}
