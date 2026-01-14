"use client";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
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

const PropertyRegistrationPage = () => {
  // Estados para controle de feedback
  const [status, setStatus] = useState({ type: "", msg: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [mobiliado, setMobiliado] = useState("");
  const [fotos, setFotos] = useState([]);

  const [formData, setFormData] = useState({
    tipoImovel: "",
    logradouro: "",
    numero: "",
    bairro: "",
    cidade: "",
    cep: "",
    proprietario: "",
    finalidade: "",
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

  // const handleFileChange = (e) => {
  //   if (e.target.files) {
  //     setFotos([...Array.from(e.target.files)]);
  //   }
  // };

  const fetchAddressByCep = async (cep) => {
    if (!cep || cep.length < 8) return;

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      if (!data.erro) {
        setFormData((prev) => ({
          ...prev,
          logradouro: data.logradouro || "",
          bairro: data.bairro || "",
          cidade: data.localidade || "",
        }));
      }
    } catch (error) {
      console.error("Erro ao buscar CEP:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", msg: "" });

    try {
      const idRandom = uuidv4();
      const bodyData = { ...formData, mobiliado };
      const response = await fetch("http://localhost:3000/imoveis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: idRandom, ...bodyData }),
      });

      if (response.ok) {
        setStatus({
          type: "success",
          msg: "✅ Imóvel cadastrado com sucesso!",
        });

        setFormData({
          tipoImovel: "",
          logradouro: "",
          numero: "",
          bairro: "",
          cidade: "",
          cep: "",
          proprietario: "",
          finalidade: "",
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
        // setFotos([]);
      } else {
        throw new Error("Erro na resposta do servidor");
      }
    } catch (error) {
      console.error("Erro:", error);
      setStatus({
        type: "error",
        msg: "⚠️ Ocorreu um erro ao cadastrar o imóvel. Tente novamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      tipoImovel: "",
      logradouro: "",
      numero: "",
      bairro: "",
      cidade: "",
      cep: "",
      proprietario: "",
      finalidade: "",
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
    setFotos([]);
    setMobiliado("");
    setStatus({ type: "", msg: "" });
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
              <label htmlFor="cep">CEP</label>
              <input
                type="text"
                id="cep"
                className={styles.input}
                value={formData.cep}
                onChange={handleChange}
                placeholder="Digite o CEP"
                onBlur={() =>
                  fetchAddressByCep(formData.cep.replace(/\D/g, ""))
                }
              />
            </div>

            <div className={`${styles.formGroup} ${styles.logradouroWide}`}>
              <label htmlFor="logradouro">Logradouro</label>
              <input
                type="text"
                id="logradouro"
                placeholder="Digite o logradouro da residência"
                className={styles.input}
                value={formData.logradouro}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={`${styles.formRow} ${styles.row3ColsAligned}`}>
            <div className={styles.formGroup}>
              <label htmlFor="numero">Número</label>
              <input
                type="text"
                id="numero"
                placeholder="Digite o número da residência"
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
                placeholder="Digite o bairro da residência"
                className={styles.input}
                value={formData.bairro}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="cidade">Cidade</label>
              <input
                type="text"
                id="cidade"
                placeholder="Digite a cidade da residência"
                className={styles.input}
                value={formData.cidade}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={`${styles.formRow} ${styles.row1Col}`}>
            <div className={styles.formGroup}>
              <label htmlFor="proprietario">Proprietário</label>
              <input
                type="text"
                id="proprietario"
                placeholder="Digite o nome do proprietário"
                className={styles.input}
                value={formData.proprietario}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={`${styles.formRow} ${styles.row1Col}`}>
            <div className={styles.formGroup}>
              <label htmlFor="finalidade">Finalidade</label>
              <select
                id="finalidade"
                className={styles.select}
                value={formData.finalidade}
                onChange={handleChange}
              >
                <option value="">Selecione...</option>
                <option value="Venda">Venda</option>
                <option value="Locação">Locação</option>
                <option value="Ambos">Ambos</option>
              </select>
            </div>
          </div>

          <div className={`${styles.formRow} ${styles.row2Cols}`}>
            <div className={styles.formGroup}>
              <label htmlFor="areaTotal">Area Total (M²)</label>
              <input
                type="text"
                id="areaTotal"
                placeholder="Digite a area total da residência"
                className={styles.input}
                value={formData.areaTotal}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="areaConstruida">Area Contruída (M²)</label>
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
                placeholder="Digite o valor de venda"
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
                placeholder="Digite o valor do aluguel"
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
                placeholder="Digite o valor do condomínio"
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

          {/* UPLOAD DE FOTOS */}
          <div className={styles.bottomSection}>
            <label className={styles.uploadArea}>
              <UploadIcon />
              <p>Arraste e solte ou clique para adicionar fotos</p>
              <input
                type="file"
                multiple
                className={styles.inputFileHidden}
                // onChange={handleFileChange}
              />
            </label>

            <div className={styles.buttonContainer}>
              <button
                type="button"
                className={styles.btnCancel}
                onClick={handleCancel}
              >
                Cancelar
              </button>

              <button
                type="submit"
                className={styles.btnRegister}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Cadastrando..." : "Cadastrar"}
              </button>
            </div>
          </div>

          <div className={styles.previewContainer}>
            {fotos.length > 0 &&
              Array.from(fotos).map((file, index) => (
                <img
                  key={index}
                  src={URL.createObjectURL(file)}
                  className={styles.previewImage}
                  alt={`Preview ${index}`}
                />
              ))}
          </div>

          {status.type === "success" && (
            <div className={styles.messageSuccess}>{status.msg}</div>
          )}
          {status.type === "error" && (
            <div className={styles.messageError}>{status.msg}</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default PropertyRegistrationPage;
