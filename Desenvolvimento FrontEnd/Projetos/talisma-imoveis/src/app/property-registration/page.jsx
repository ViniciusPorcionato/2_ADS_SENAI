"use client";
import { useState } from "react";
import styles from "./property-registration.module.css";

const UploadIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#D9534F"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" y1="3" x2="12" y2="15" />
  </svg>
);

export default function PropertyRegistrationPage() {
  const [message, setMessage] = useState("");
  const [mobiliado, setMobiliado] = useState("");
  const [formData, setFormData] = useState({
    tipoImovel: "",
    logradouro: "",
    numero: "",
    bairro: "",
    cidade: "",
    areaTotal: "",
    areaConstruida: "",
    valorVenda: "",
    valorAluguel: "",
    valorCondominio: "",
    quartos: "",
    banheiros: "",
    vagas: "",
    anoConstrucao: "",
    descricao: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/imoveis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, mobiliado }),
      });

      if (response.ok) {
        setMessage("✅ Imóvel cadastrado com sucesso!");
        setFormData({
          tipoImovel: "",
          logradouro: "",
          numero: "",
          bairro: "",
          cidade: "",
          areaTotal: "",
          areaConstruida: "",
          valorVenda: "",
          valorAluguel: "",
          valorCondominio: "",
          quartos: "",
          banheiros: "",
          vagas: "",
          anoConstrucao: "",
          descricao: "",
        });
        setMobiliado("");
      } else {
        setMessage("❌ Erro ao cadastrar o imóvel.");
      }
    } catch (error) {
      console.error("Erro:", error);
      setMessage("⚠️ Erro de conexão com o servidor.");
    }
  };

  const handleCancel = () => {
    setFormData({
      tipoImovel: "",
      logradouro: "",
      numero: "",
      bairro: "",
      cidade: "",
      areaTotal: "",
      areaConstruida: "",
      valorVenda: "",
      valorAluguel: "",
      valorCondominio: "",
      quartos: "",
      banheiros: "",
      vagas: "",
      anoConstrucao: "",
      descricao: "",
    });
    setMobiliado("");
    setMessage("");
  };

  return (
    <div className={styles.propertyRegistrationContainer}>
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          {/* --- INFORMAÇÕES GERAIS --- */}
          <h3 className={styles.subtitle}>INFORMAÇÕES GERAIS</h3>
          <div className={`${styles.formRow} ${styles.row4Cols}`}>
            <div className={styles.formGroup}>
              <label htmlFor="tipoImovel">Tipo de Imóvel</label>
              <select
                id="tipoImovel"
                className={styles.select}
                value={formData.tipoImovel}
                onChange={handleChange}
              >
                <option value="">Selecione...</option>
                <option value="Casa">Casa</option>
                <option value="Apartamento">Apartamento</option>
                <option value="Comercial">Comercial</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="logradouro">Logradouro</label>
              <input
                type="text"
                id="logradouro"
                className={styles.input}
                value={formData.logradouro}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="numero">Número</label>
              <input
                type="text"
                id="numero"
                className={styles.input}
                value={formData.numero}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="bairro">Bairro</label>
              <input
                type="text"
                id="bairro"
                className={styles.input}
                value={formData.bairro}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={`${styles.formRow} ${styles.row3ColsCidade}`}>
            <div className={styles.formGroup}>
              <label htmlFor="cidade">Cidade</label>
              <input
                type="text"
                id="cidade"
                className={styles.input}
                value={formData.cidade}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="areaTotal">Área Total (M²)</label>
              <input
                type="text"
                id="areaTotal"
                className={styles.input}
                value={formData.areaTotal}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="areaConstruida">Área Construída (M²)</label>
              <input
                type="text"
                id="areaConstruida"
                className={styles.input}
                value={formData.areaConstruida}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* --- VALORES --- */}
          <h3 className={styles.subtitle}>VALORES</h3>
          <div className={`${styles.formRow} ${styles.row3Cols}`}>
            <div className={styles.formGroup}>
              <label htmlFor="valorVenda">Valor Venda (R$)</label>
              <input
                type="text"
                id="valorVenda"
                className={styles.input}
                value={formData.valorVenda}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="valorAluguel">Valor Aluguel (R$)</label>
              <input
                type="text"
                id="valorAluguel"
                className={styles.input}
                value={formData.valorAluguel}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="valorCondominio">Valor Condomínio (R$)</label>
              <input
                type="text"
                id="valorCondominio"
                className={styles.input}
                value={formData.valorCondominio}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* --- DETALHES IMÓVEIS --- */}
          <h3 className={styles.subtitle}>DETALHES IMÓVEIS</h3>
          <div className={`${styles.formRow} ${styles.row4Cols}`}>
            <div className={styles.formGroup}>
              <label htmlFor="quartos">Número de Quartos</label>
              <select
                id="quartos"
                className={styles.select}
                value={formData.quartos}
                onChange={handleChange}
              >
                <option value="">Selecione...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="Mais">Mais...</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="banheiros">Número de Banheiros</label>
              <select
                id="banheiros"
                className={styles.select}
                value={formData.banheiros}
                onChange={handleChange}
              >
                <option value="">Selecione...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="Mais">Mais...</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="vagas">Número de Vagas</label>
              <select
                id="vagas"
                className={styles.select}
                value={formData.vagas}
                onChange={handleChange}
              >
                <option value="">Selecione...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="Mais">Mais...</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="anoConstrucao">Ano de Construção</label>
              <input
                type="text"
                id="anoConstrucao"
                className={styles.input}
                value={formData.anoConstrucao}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* MOBILIADO E DESCRIÇÃO */}
          <div className={`${styles.formRow} ${styles.rowMobiliadoDescricao}`}>
            <div className={styles.formGroup}>
              <label>Mobiliado</label>
              <div className={styles.radioGroup}>
                <input
                  type="radio"
                  id="mobSim"
                  name="mobiliado"
                  value="sim"
                  checked={mobiliado === "sim"}
                  onChange={() => setMobiliado("sim")}
                />
                <label htmlFor="mobSim" className={styles.radioLabel}>
                  Sim
                </label>

                <input
                  type="radio"
                  id="mobNao"
                  name="mobiliado"
                  value="nao"
                  checked={mobiliado === "nao"}
                  onChange={() => setMobiliado("nao")}
                />
                <label htmlFor="mobNao" className={styles.radioLabel}>
                  Não
                </label>
              </div>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="descricao">Descrição</label>
              <textarea
                id="descricao"
                className={styles.textarea}
                rows="5"
                value={formData.descricao}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          {/* BOTÕES */}
          <div className={styles.bottomSection}>
            <div className={styles.uploadArea}>
              <UploadIcon />
              <p>Arraste e solte ou clique para adicionar fotos</p>
            </div>
            <div className={styles.buttonContainer}>
              <button
                type="button"
                className={styles.btnCancel}
                onClick={handleCancel}
              >
                Cancelar
              </button>
              <button type="submit" className={styles.btnRegister}>
                Cadastrar
              </button>
            </div>
          </div>

          {message && <p className={styles.message}>{message}</p>}
        </form>
      </div>
    </div>
  );
}
