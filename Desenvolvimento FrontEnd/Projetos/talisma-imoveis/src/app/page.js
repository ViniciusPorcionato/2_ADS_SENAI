"use client";

import { useState, useRef, use, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import ImageBanner from '../assets/images/image-banner.svg';
import ImagemFamily from '../assets/images/familia.png';

export default function HomePage() {
  const [tabAtiva, setTabAtiva] = useState("comprar");
  const [properties, setProperties] = useState([]);
  const carouselTrackRef = useRef(null);

  //Lógica para aplicar no filtro futuramente
  // const buscarImoveis = async (tipoImovel, cidade, finalidade) => {
  //   try {
  //     const finalidadeJson = finalidade === "comprar" ? "Venda" : "Aluguel";
  //     const response = await fetch(`http://localhost:3000/imoveis?tipoImovel=${tipoImovel}&cidade=${cidade}&finalidade=${finalidadeJson}`);
  //     const data = await response.json();
  //     setProperties(data);
  //   } catch (error) {
  //     console.error("Erro ao buscar imóveis:", error);
  //   }
  // };

  useEffect(() => {
    buscarImoveis();
  }, []);

  const buscarImoveis = async () => {
    try {
      const response = await fetch(`http://localhost:3000/imoveis`);
      const data = await response.json();
      setProperties(data);
    } catch (error) {
      console.error("Erro ao buscar imóveis:", error);
    }
  };

  // const handleSearch = (event) => {
  //   event.preventDefault();
  //   const form = event.target;
  //   const tipoImovel = form["tipo-imovel"].value;
  //   const cidade = form["localizacao"].value;
  //   const finalidade = tabAtiva;
  //   buscarImoveis(tipoImovel, cidade, finalidade);
  // };

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
      
      {/* Seção de Busca */}
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

            <form id="searchForm" 
            className={styles.searchForm} 
            // onSubmit={handleSearch}
            >
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

      {/* Seção de Destaques */}
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
                <p>Nenhum imóvel encontrado. Tente buscar acima.</p>
              )}
            </div>
            <button className={`${styles.carouselBtn} ${styles.right}`} onClick={() => scrollCarousel(1)}>›</button>
          </div>
        </div>
      </section>


      {/* Sessão Sobre a Empresa */}
      <section className={styles.sectionAbout}>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutContent}>
            <h2>Sobre a Empresa</h2>
            <p className={styles.aboutSlogan}>
              Realizando seu sonho de forma sólida, confiável e duradoura
            </p>
            <p className={styles.aboutDescription}>
              Ética profissional e transparência são imprescindíveis ao mercado
              imobiliário. A TALISMÃ IMÓVEIS oferece aos seus clientes um
              atendimento personalizado, o que resulta em segurança em todos os
              negócios realizados, satisfazendo as nossas clientes.
            </p>
            <Link href="/about" className={styles.linkAbout}>
              <button className={styles.aboutButton}>VEJA MAIS <span>{'>'}</span></button>
            </Link>
          </div>
          <div className={styles.aboutMap}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975870295!2d-46.6520!3d-23.5645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzUyLjIiUyA0NsKwMzknMDcuMiJX!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Seção de Depoimento */}
      <section className={styles.clientTestimonial}>
        <div className={styles.testimonialContainer}>
          <div className={styles.testimonialContent}>
            <div className={styles.clientPhotoContainer}>
              <Image 
                src={ImagemFamily} 
                alt="Foto do cliente" 
                className={styles.clientPhoto}
                width={400} 
                height={400}
              />
            </div>
            <div className={styles.testimonialText}>
              <p className={styles.quote}>
                "Depoimento do cliente. Ética profissional e transparência são
                imprescindíveis no mercado imobiliário. A TALISMÃ IMÓVEIS"
              </p>
              <p className={styles.clientName}>Maria Oliveira</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}