"use client";

import { useState } from "react";
import styles from "./contact.module.css";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { v4 as uuidv4 } from "uuid";

const ContactPage = () => {
  // 1. Removemos o ID do estado inicial. Ele só deve existir na hora de enviar.
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", msg: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", msg: "" });

    try {
      const idRandom = uuidv4();

      const dataSubmit = {
        id: idRandom,
        nome: formData.name,
        email: formData.email,
        telefone: formData.phone,
        assunto: formData.subject,
        mensagem: formData.message,
        dataEnvio: new Date().toLocaleString('pt-BR')
      };

      const response = await fetch("http://localhost:3000/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataSubmit),
      });

      if (response.ok) {
        setStatus({
          type: "success",
          msg: "Mensagem enviada com sucesso! Entraremos em contato em breve.",
        });
        
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        // Se a resposta não for ok, lançamos erro para cair no catch
        throw new Error("Erro na resposta do servidor"); 
      }
    } catch (error) {
      console.error("Erro:", error);
      setStatus({
        type: "error",
        msg: "Ocorreu um erro ao enviar. Tente novamente mais tarde.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className={styles.contactContainer}>
      <h1 className={styles.pageTitle}>Fale Conosco</h1>

      <div className={styles.contactContent}>
        <div className={styles.contactInfo}>
          <h2>Informações de Contato</h2>

          <div className={styles.infoItem}>
            <div className={styles.iconWrapper}>
              <Phone size={24} />
            </div>
            <p>
              <strong>Telefone:</strong> <br /> (11) 9999-9999
            </p>
          </div>

          <div className={styles.infoItem}>
            <div className={styles.iconWrapper}>
              <Mail size={24} />
            </div>
            <p>
              <strong>E-mail:</strong> <br /> contato@talismaimoveis.com
            </p>
          </div>

          <div className={styles.infoItem}>
            <div className={styles.iconWrapper}>
              <MapPin size={24} />
            </div>
            <p>
              <strong>Endereço:</strong> <br />
              R. Paulo Nunes Félix, 534 - Parque Sao Rafael, São Paulo - SP
            </p>
          </div>

          <div className={styles.infoItem}>
            <div className={styles.iconWrapper}>
              <Clock size={24} />
            </div>
            <p>
              <strong>Horário:</strong> <br /> Seg-Sex: 9h às 18h
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <h2>Envie sua Mensagem</h2>

          <div className={styles.formGroup}>
            <label htmlFor="name">Nome Completo*</label>
            <input
              type="text"
              id="name"
              name="name"
              className={styles.input}
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">E-mail*</label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.input}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone">Telefone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className={styles.input}
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="subject">Assunto*</label>
            <select
              id="subject"
              name="subject"
              className={styles.select}
              value={formData.subject}
              onChange={handleChange}
              required
            >
              <option value="">Selecione...</option>
              <option value="informacao">Informação sobre imóvel</option>
              <option value="visita">Agendar visita</option>
              <option value="duvida">Dúvida geral</option>
              <option value="outro">Outro assunto</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Mensagem*</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className={styles.textarea}
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className={styles.btnSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? "ENVIANDO..." : "ENVIAR MENSAGEM"}
          </button>

          {status.type === "success" && (
            <div className={styles.messageSuccess}>{status.msg}</div>
          )}
          {status.type === "error" && (
            <div className={styles.messageError}>{status.msg}</div>
          )}
        </form>
      </div>

      <div className={styles.contactMap}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.046907409951!2d-46.474640924668615!3d-23.60265297877402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce6f6d6c6e1c2d%3A0x7c1d7c0a7e0e0e0e!2sR.%20Paulo%20Nunes%20F%C3%A9lix%2C%20534%20-%20Parque%20S%C3%A3o%20Rafael%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2008320-370!5e0!3m2!1spt-BR!2sbr!4v1683123456789!5m2!1spt-BR!2sbr"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </main>
  );
};

export default ContactPage;