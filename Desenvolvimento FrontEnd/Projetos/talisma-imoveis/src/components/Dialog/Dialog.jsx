"use client";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, User, Lock, Eye, EyeOff } from "lucide-react";
import styles from "./Dialog.module.css";

const LoginDialog = ({ children }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", { cpf, password });
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.content}>
          <Dialog.Title className={styles.title}>
            Entrar na sua conta
          </Dialog.Title>
          <Dialog.Description className={styles.description}>
            Digite suas credenciais para acessar o sistema
          </Dialog.Description>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.field}>
              <label htmlFor="cpf" className={styles.label}>
                CPF
              </label>
              <div className={styles.inputWrapper}>
                <User className={styles.icon} size={20} />
                <input
                  id="cpf"
                  type="text"
                  placeholder="000.000.000-00"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                  className={styles.input}
                  required
                />
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="password" className={styles.label}>
                Senha
              </label>
              <div className={styles.inputWrapper}>
                <Lock className={styles.icon} size={20} />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={styles.input}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={styles.togglePassword}
                  aria-label="Mostrar/Ocultar senha"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <a href="#" className={styles.forgotPassword}>
              Esqueceu sua senha?
            </a>

            <button type="submit" className={styles.submitButton}>
              Entrar
            </button>
          </form>
          <Dialog.Close asChild>
            <button className={styles.closeButton} aria-label="Fechar">
              <X size={24} />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default LoginDialog;
