"use client";
import styles from "./properties.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";

export default function PropertiesPage() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    async function fetchProperties() {
      try {
        const response = await fetch("http://localhost:3001/imoveis");
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.error("Erro ao buscar imóveis:", error);
      }
    }
    fetchProperties();
  }, []);

  return (
    <div>
      <div className={styles.termsHeader}>
        <div className={styles.termsHeaderContent}>
          <h1 className={styles.termsTitle}>ESCOLHA O MELHOR PRA VOCÊ</h1>
          <h2 className={styles.termsSubtitle}>Todos os Imóveis</h2>
        </div>
      </div>

      <main className={styles.imoveisContainer}>
        <div className={styles.cardsContainer}>
          {properties.map((property) => (
            <div className={styles.propertyCard} key={property.id}>
              <div className={styles.cardImage}>
                <Image
                  src={property.image}
                  alt={property.title}
                  width={500}
                  height={300}
                />
              </div>

              <div className={styles.cardContent}>
                <h2 className={styles.propertyTitle}>{property.tipoImovel}</h2>

                <div className={styles.propertyInfo}>
                  <span className={styles.location}>
                    <MapPin color="#8d001a" />
                    {property.cidade}
                  </span>

                  <span className={styles.price}>
                    R${" "}
                    {property.finalidade == "Venda"
                      ? property.valorVenda
                      : property.valorAluguel}
                  </span>
                </div>

                <Link
                  href={`/detalhes?id=${property.id}`}
                  className={styles.cardButton}
                >
                  Ver detalhes
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
