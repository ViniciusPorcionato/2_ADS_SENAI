"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import ImageBanner from '../assets/images/image-banner.svg';
import ImagemFamily from '../assets/images/familia.png';

export default function HomePage() {
  const [tabAtiva, setTabAtiva] = useState("comprar");
  const [properties, setProperties] = useState([]);
  const carouselTrackRef = useRef(null);

  // Função para buscar imóveis
  const buscarImoveis = async (tipoImovel, cidade, finalidade) => {
    try {
      // Ajustando o parâmetro "finalidade" para o JSON Server
      const finalidadeJson = finalidade === "comprar" ? "Venda" : "Aluguel";

      const response = await fetch(`http://localhost:3000/imoveis?tipoImovel=${tipoImovel}&cidade=${cidade}&finalidade=${finalidadeJson}`);
      const data = await response.json();
      setProperties(data);
    } catch (error) {
      console.error("Erro ao buscar imóveis:", error);
    }
  };

  // Função do submit do formulário
  const handleSearch = (event) => {
    event.preventDefault();
    const form = event.target;
    const tipoImovel = form["tipo-imovel"].value;
    const cidade = form["localizacao"].value;
    const finalidade = tabAtiva; // "comprar" ou "alugar"
    buscarImoveis(tipoImovel, cidade, finalidade);
  };

  const scrollCarousel = (direction) => {
    if (carouselTrackRef.current) {
      const scrollAmount = (carouselTrackRef.current.clientWidth / 2) * direction;
      carouselTrackRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.pageContainer}>
      <section className={styles.sectionSearch}>
        <Image
          className={styles.imageBanner}
          src={ImageBanner}
          alt="Mulher com celular"
          width={700}
          height={575}
          priority
        />
        <div className={styles.bannerContainer}>
          <div className={styles.searchBox}>
            <h2>O imóvel que você procura está aqui!</h2>

            <div className={styles.tabOptions}>
              <button
                type="button"
                className={`${styles.tabButton} ${tabAtiva === "comprar" ? styles.active : ""}`}
                onClick={() => setTabAtiva("comprar")}
              >
                COMPRAR
              </button>
              <button
                type="button"
                className={`${styles.tabButton} ${tabAtiva === "alugar" ? styles.active : ""}`}
                onClick={() => setTabAtiva("alugar")}
              >
                ALUGAR
              </button>
            </div>

            <hr className={styles.tabDivider} />

            <form id="searchForm" className={styles.searchForm} onSubmit={handleSearch}>
              <div className={styles.formGroup}>
                <label htmlFor="tipo-imovel">Tipo de Imóvel</label>
                <select id="tipo-imovel" name="tipo-imovel">
                  <option value="">Selecione</option>
                  <option value="Apartamento">Apartamento</option>
                  <option value="Casa">Casa</option>
                  <option value="Terreno">Terreno</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="localizacao">Onde Deseja Morar?</label>
                <select id="localizacao" name="localizacao">
                  <option value="">Selecione</option>
                  <option value="São Paulo">São Paulo</option>
                  <option value="Rio de Janeiro">Rio de Janeiro</option>
                  <option value="Belo Horizonte">Belo Horizonte</option>
                </select>
              </div>

              <button type="submit" className={styles.btnBuscar}>
                BUSCAR
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className={styles.sectionFeatured}>
        <div className={styles.featuredContainer}>
          <h2>Imóveis em Destaque</h2>
          <div className={styles.carouselContainer}>
            <button className={`${styles.carouselBtn} ${styles.left}`} onClick={() => scrollCarousel(-1)}>‹</button>
            <div className={styles.carouselTrack} ref={carouselTrackRef}>
              {properties.length > 0 ? (
                properties.map((imovel) => (
                  <Link key={imovel.id} href={`/detalhes/${imovel.id}`} className={styles.cardLink}>
                    <div className={styles.card}>
                      <Image
                        src={ImageBanner}
                        alt={imovel.tipoImovel}
                        className={styles.imageCard}
                        width={280}
                        height={100}
                      />
                      <div className={styles.contentCard}>
                        <h3 className={styles.titleCard}>{`${imovel.tipoImovel} em ${imovel.cidade}`}</h3>
                        <p className={styles.locationCard}>{`${imovel.bairro}, ${imovel.cidade}`}</p>
                        <p className={styles.priceCard}>
                          {tabAtiva === "comprar" ? imovel.valorVenda : imovel.valorAluguel}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <p>Nenhum imóvel encontrado</p>
              )}
            </div>
            <button className={`${styles.carouselBtn} ${styles.right}`} onClick={() => scrollCarousel(1)}>›</button>
          </div>
        </div>
      </section>
    </div>
  );
}
