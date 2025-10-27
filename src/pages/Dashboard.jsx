import React from "react";
import "../styles/dashboard.css";
import ProductCard from "../components/ProductCard";
import CartButton from "../components/CartButton";

export default function Dashboard() {
  const produtos = [
    { id: 1, name: "Mini Salgados", price: 12.99, image: "/images/foods/food1.jpg" },
    { id: 2, name: "X-Burger", price: 9.99, image: "/images/foods/food2.jpg" },
    { id: 3, name: "Pizza Grande", price: 29.9, image: "/images/foods/food3.jpg" }
  ];

  return (
    <div className="page">
      <header className="topbar">
        <div className="top-row">
          <div className="brand-badge">
            <img src="/images/logos/smarty-logo.png" alt="Smarty" />
          </div>
          <div className="location">
            <span className="location-sub">Entregas em</span>
            <span className="location-city">Mallet - PR</span>
          </div>
          <img className="user-icon" src="/images/icons/user.svg" alt="Perfil" />
        </div>
        <label className="searchbar">
          <img src="/images/icons/search.svg" alt="" width="18" height="18" />
          <input type="text" placeholder="Buscar produtos ou lojas..." />
        </label>
      </header>

      <main className="content">
        <section className="hero">
          <div className="hero-card">
            <div className="hero-text">
              <p>Peça agora no</p>
              <h1>SMARTY ENTREGAS</h1>
            </div>
            <img className="hero-figure" src="/images/banners/motoboy.png" alt="" />
          </div>
        </section>

        <section className="categories">
          <div className="chips">
            <button className="chip chip-active">Restaurantes</button>
            <button className="chip">Mercado</button>
            <button className="chip">Farmácia</button>
            <button className="chip">Bebidas</button>
          </div>
        </section>

        <section className="section">
          <div className="section-head">
            <h2>Promoções com entrega grátis</h2>
            <button className="see-more">Ver mais</button>
          </div>
          <div className="cards">
            {produtos.map(p => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>
        </section>
      </main>

      <CartButton />

      <nav className="navbar">
        <button className="navbtn navbtn-active">Início</button>
        <button className="navbtn">Pedidos</button>
        <button className="navbtn">Perfil</button>
      </nav>
    </div>
  );
}
