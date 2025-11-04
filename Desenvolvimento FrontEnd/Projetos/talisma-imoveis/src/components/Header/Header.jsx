"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import Logo from "../../assets/images/Logo-Red.svg";
import UserAvatar from "../Avatar/Avatar";
import LoginDialog from "../Dialog/Dialog";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.contentHeader}>
        <Link href="/">
          <Image
            className={styles.logoImage}
            src={Logo}
            alt="Logo da imobiliária"
            width={150}
            height={40}
            priority
          />
        </Link>

        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav
          className={`${styles.navbar} ${menuOpen ? styles.navbarOpen : ""}`}
        >
          <Link className={styles.link} href="/">Início</Link>
          <Link className={styles.link} href="/imoveis">Imóveis</Link>
          <Link className={styles.link} href="/about">Sobre nós</Link>
          <Link className={styles.link} href="/contato">Contato</Link>
          <Link className={styles.link} href="/">Cadastro Imóveis</Link>
          <Link className={styles.link} href="/">Cadastro Usuários</Link>
          
          <div className={styles.mobileAvatar}>
            <LoginDialog>
              <div style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "10px" }}>
                <UserAvatar/>
                <span style={{ color: "#8d001a", fontWeight: "500" }}>Fazer Login</span>
              </div>
            </LoginDialog>
          </div>
        </nav>

        <div className={styles.avatarContainer}>
          <LoginDialog>
            <div style={{ cursor: "pointer" }}>
              <UserAvatar/>
            </div>
          </LoginDialog>
        </div>
      </div>
    </header>
  );
}