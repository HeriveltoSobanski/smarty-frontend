import React, { useState } from "react";
import "../styles/register.css";

export default function Register() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const resposta = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, senha }),
      });

      const data = await resposta.json();

      if (resposta.ok) {
        alert("Usuário registrado com sucesso!");
        window.location.href = "/login";
      } else {
        alert(data.message || "Erro ao registrar!");
      }
    } catch (error) {
      console.error("Erro ao conectar ao servidor:", error);
      alert("Erro de conexão com o servidor.");
    }
  };

  return (
    <div className="auth-container">
      <img src="/smarty-logo.png" alt="Logo" className="auth-logo" />
      <h2 className="auth-title">Registrar-se</h2>

      <form className="auth-form" onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        <button type="submit" className="btn-primary">
          Registrar
        </button>
      </form>

      <button
        className="btn-secondary"
        onClick={() => (window.location.href = "/login")}
      >
        Já tenho conta
      </button>
    </div>
  );
}
