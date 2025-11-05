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

const propertyRegistrationPage = () => {
    
  const [mobiliado, setMobiliado] = useState(null);

  return (
    <div className={styles.propertyRegistrationContainer}>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          {/* --- INFORMAÇÕES GERAIS --- */}
          <h3 className={styles.subtitle}>INFORMAÇÕES GERAIS</h3>
          <div className={`${styles.formRow} ${styles.row4Cols}`}>
            <div className={styles.formGroup}>
              <label htmlFor="tipoImovel">Tipo de Imóvel</label>
              <select id="tipoImovel" className={styles.select}>
                <option>Selecione...</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="logradouro">Logradouro</label>
              <input type="text" id="logradouro" className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="numero">Número</label>
              <input type="text" id="numero" className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="bairro">Bairro</label>
              <input type="text" id="bairro" className={styles.input} />
            </div>
          </div>
          <div className={`${styles.formRow} ${styles.row3ColsCidade}`}>
            <div className={styles.formGroup}>
              <label htmlFor="cidade">Cidade</label>
              <input type="text" id="cidade" className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="areaTotal">Área Total (M²)</label>
              <input type="text" id="areaTotal" className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="areaConstruida">Área Construída (M²)</label>
              <input type="text" id="areaConstruida" className={styles.input} />
            </div>
          </div>

          {/* --- VALORES --- */}
          <h3 className={styles.subtitle}>VALORES</h3>
          <div className={`${styles.formRow} ${styles.row3Cols}`}>
            <div className={styles.formGroup}>
              <label htmlFor="valorVenda">Valor Venda (R$)</label>
              <input type="text" id="valorVenda" className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="valorAluguel">Valor Aluguel (R$)</label>
              <input type="text" id="valorAluguel" className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="valorCondominio">Valor Condomínio (R$)</label>
              <input
                type="text"
                id="valorCondominio"
                className={styles.input}
              />
            </div>
          </div>

          {/* --- DETALHES IMÓVEIS --- */}
          <h3 className={styles.subtitle}>DETALHES IMÓVEIS</h3>
          <div className={`${styles.formRow} ${styles.row4Cols}`}>
            <div className={styles.formGroup}>
              <label htmlFor="quartos">Número de Quartos</label>
              <select id="quartos" className={styles.select}>
                <option>Selecione...</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="banheiros">Número de Banheiros</label>
              <select id="banheiros" className={styles.select}>
                <option>Selecione...</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="vagas">Número de Vagas</label>
              <select id="vagas" className={styles.select}>
                <option>Selecione...</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="anoConstrucao">Ano de Construção</label>
              <input type="text" id="anoConstrucao" className={styles.input} />
            </div>
          </div>

          {/* Linha para Mobiliado e Descrição */}
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
              ></textarea>
            </div>
          </div>

          <div className={styles.bottomSection}>
            <div className={styles.uploadArea}>
              <UploadIcon />
              <p>Arraste e solte ou clique para adicionar fotos</p>
            </div>
            <div className={styles.buttonContainer}>
              <button type="button" className={styles.btnCancel}>
                Cancelar
              </button>
              <button type="submit" className={styles.btnRegister}>
                Cadastrar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default propertyRegistrationPage;
