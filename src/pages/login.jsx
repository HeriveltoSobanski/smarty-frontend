import React, { useState } from "react";
import "../styles/login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const resposta = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });

      const data = await resposta.json();

      if (resposta.ok) {
        localStorage.setItem("usuario", JSON.stringify(data.usuario));
        localStorage.setItem("token", data.token);
        window.location.href = "/dashboard";
      } else {
        setMensagem(data.message || "E-mail ou senha incorretos!");
      }
    } catch (error) {
      setMensagem("Erro de conexão com o servidor.");
    }
  };

  return (
    <div className="auth-container">
      <img src="/smarty-logo.png" alt="Logo" className="auth-logo" />
      <h2 className="auth-title">Entrar</h2>

      {mensagem && <p className="erro">{mensagem}</p>}

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
        <button type="submit" className="btn-primary">
          Entrar
        </button>
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
