"use client";
import { useState } from "react";
import styles from "./user-registration.module.css";
import { v4 as uuidv4 } from "uuid";

export default function UserRegistrationPage() {
  const [message, setMessage] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [formData, setFormData] = useState({
    nomeCompleto: "",
    cpf: "",
    rg: "",
    email: "",
    senha: "",
    confirmarSenha: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleCancel = () => {
    setFormData({
      nomeCompleto: "",
      cpf: "",
      rg: "",
      email: "",
      senha: "",
      confirmarSenha: "",
    });
    setMessage("");
    setPasswordError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setPasswordError("");

    if (formData.senha !== formData.confirmarSenha) {
      setPasswordError("As senhas não coincidem.");
      return;
    }

    if (formData.senha.length < 6) {
      setPasswordError("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    if (!formData.nomeCompleto || !formData.email || !formData.cpf) {
      setMessage("⚠️ Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    try {
      const idRandom = uuidv4();
      const { confirmarSenha, ...userData } = formData;

      const response = await fetch("http://localhost:3001/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: idRandom, ...userData }),
      });

      if (response.ok) {
        setMessage("✅ Usuário cadastrado com sucesso!");
        handleCancel();
      } else {
        setMessage("❌ Erro ao cadastrar o usuário.");
      }
    } catch (error) {
      console.error("Erro:", error);
      setMessage("⚠️ Erro de conexão com o servidor.");
    }
  };

  return (
    <div className={styles.userRegistrationContainer}>
      <div className={styles.formContainer}>
        <h3 className={styles.subtitle}>Cadastro de Usuário</h3>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="nomeCompleto">Nome Completo</label>
              <input
                type="text"
                id="nomeCompleto"
                className={styles.input}
                value={formData.nomeCompleto}
                onChange={handleChange}
                placeholder="Digite seu nome completo"
                required
              />
            </div>
          </div>
          <div className={`${styles.formRow} ${styles.row2Cols}`}>
            <div className={styles.formGroup}>
              <label htmlFor="cpf">CPF</label>
              <input
                type="text"
                id="cpf"
                className={styles.input}
                value={formData.cpf}
                onChange={handleChange}
                placeholder="000.000.000-00"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="rg">RG</label>
              <input
                type="text"
                id="rg"
                className={styles.input}
                value={formData.rg}
                onChange={handleChange}
                placeholder="00.000.000-0"
              />
            </div>
          </div>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className={styles.input}
                value={formData.email}
                onChange={handleChange}
                placeholder="exemplo@dominio.com"
                required
              />
            </div>
          </div>
          <div className={`${styles.formRow} ${styles.row2Cols}`}>
            <div className={styles.formGroup}>
              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                id="senha"
                className={styles.input}
                value={formData.senha}
                onChange={handleChange}
                placeholder="Mínimo 6 caracteres"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="confirmarSenha">Confirmar Senha</label>
              <input
                type="password"
                id="confirmarSenha"
                className={styles.input}
                value={formData.confirmarSenha}
                onChange={handleChange}
                placeholder="Repita a senha"
                required
              />
            </div>
          </div>

          {passwordError && <p className={styles.errorMessage}>{passwordError}</p>}

          <div className={styles.buttonContainer}>
            <button type="button" className={styles.btnCancel} onClick={handleCancel}>
              Cancelar
            </button>
            <button type="submit" className={styles.btnRegister}>
              Cadastrar
            </button>
          </div>

          {message && <p className={styles.message}>{message}</p>}
        </form>
      </div>
    </div>
  );
}
