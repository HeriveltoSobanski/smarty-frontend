import React, { useState } from "react";
import "./register.css";

export default function Register() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    cpf: "",
    telefone: "",
    senha: "",
    confirmarSenha: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (form.senha !== form.confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    // Mock de cadastro (substituir pela API)
    console.log("Usuário cadastrado:", form);
    alert("Cadastro realizado com sucesso!");
    window.location.href = "/login"; // redireciona pro login
  };

  return (
    <div className="register-container">
      <img src="/smarty-logo.png" alt="Logo" className="register-logo" />
      <h2 className="auth-title">Registre-se</h2>

      <form className="register-box" onSubmit={handleRegister}>
        <input type="text" name="nome" placeholder="Nome" onChange={handleChange} required />
        <input type="email" name="email" placeholder="E-mail" onChange={handleChange} required />
        <input type="text" name="cpf" placeholder="CPF" onChange={handleChange} required />
        <input type="text" name="telefone" placeholder="Telefone" onChange={handleChange} required />
        <input type="password" name="senha" placeholder="Senha" onChange={handleChange} required />
        <input type="password" name="confirmarSenha" placeholder="Confirmar senha" onChange={handleChange} required />

        <button type="submit" className="register-btn">Cadastrar</button>
      </form>
    </div>
  );
}
