import React from "react";
import "../styles/dashboard.css";

export default function Dashboard() {
  return (
    <div className="page">
      <header className="topbar">
        <div className="topbar-left">
          <img className="brand-icon" src="/smarty-logo.png" alt="" />
          <div className="location">
            <span className="location-sub">Entregas em</span>
            <span className="location-city">Mallet - PR</span>
          </div>
        </div>
        <button className="searchbar">
          <span>Buscar produtos ou lojas...</span>
        </button>
      </header>

      <main className="content">
        <section className="hero">
          <div className="hero-card">
            <div className="hero-text">
              <p>Peça agora no</p>
              <h1>SMARTY ENTREGAS</h1>
            </div>
            <img className="hero-figure" src="/motoboy.png" alt="" />
          </div>
        </section>

        <section className="categories">
          <div className="chips">
            <button className="chip chip-active">Restaurantes</button>
            <button className="chip">Em breve</button>
            <button className="chip">Em breve</button>
            <button className="chip">Em breve</button>
            <button className="chip">Em breve</button>
            <button className="chip">Em breve</button>
            <button className="chip">Em breve</button>
            <button className="chip">Em breve</button>
          </div>
        </section>

        <section className="section">
          <div className="section-head">
            <h2>Promoções com entrega grátis</h2>
            <button className="see-more">Ver mais</button>
          </div>

          <div className="cards">
            <article className="card" role="button">
              <div className="thumb-wrap">
                <img src="/food1.jpg" alt="" loading="lazy" />
              </div>
              <h3>Mini Salgados</h3>
              <p className="price">R$ 12,99</p>
            </article>

            <article className="card" role="button">
              <div className="thumb-wrap">
                <img src="/food2.jpg" alt="" loading="lazy" />
              </div>
              <h3>X-Burger</h3>
              <p className="price">R$ 9,99</p>
            </article>

            <article className="card" role="button">
              <div className="thumb-wrap">
                <img src="/food3.jpg" alt="" loading="lazy" />
              </div>
              <h3>Pizza Grande</h3>
              <p className="price">R$ 29,90</p>
            </article>
          </div>
        </section>
      </main>

      <nav className="navbar">
        <button className="navbtn navbtn-active">Início</button>
        <button className="navbtn">Pedidos</button>
        <button className="navbtn">Perfil</button>
      </nav>
    </div>
  );
}
