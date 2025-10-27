import React from "react";
import { useCart } from "../context/CartContext";

export default function CartButton() {
  const { items, total } = useCart();
  if (!items?.length) return null;

  const qtd = items.reduce((acc, it) => acc + it.qty, 0);
  const totalFmt = total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  return (
    <button className="cart-fab" onClick={() => window.location.href = "/checkout"}>
      <span>🛒 {qtd} itens</span>
      <span className="pill">{totalFmt}</span>
    </button>
  );
}
