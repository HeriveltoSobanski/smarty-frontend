import React, { useState } from "react";
import "./auth.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "teste@teste.com" && senha === "123456") {
      alert("Login bem-sucedido!");
      window.location.href = "/dashboard";
    } else {
      alert("E-mail ou senha incorretos!");
    }
  };

  return (
    <div className="auth-container">
      <img src="/smarty-logo.png" alt="Logo" className="auth-logo" />
      <h2 className="auth-title">Entrar</h2>

      <form className="auth-form" onSubmit={handleLogin}>
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

        <button type="submit" className="btn-primary">Entrar</button>
      </form>

      <button
        className="btn-secondary"
        onClick={() => (window.location.href = "/register")}
      >
        Registrar-se
      </button>
    </div>
  );
}
