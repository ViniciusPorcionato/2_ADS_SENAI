"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import styles from "./details.module.css";
import { MapPin } from "lucide-react";

const DetailsPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    async function fetchPropertyDetails() {
      if (!id) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`http://localhost:3000/imoveis/${id}`);
        
        if (!response.ok) {
          throw new Error("Imóvel não encontrado");
        }
        
        const data = await response.json();
        setProperty(data);
        setMainImage(data.image || "/placeholder.jpg");
      } catch (error) {
        console.error("Erro ao buscar detalhes do imóvel:", error);
        setProperty(null);
      } finally {
        setLoading(false);
      }
    }

    fetchPropertyDetails();
  }, [id]);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <p>Carregando detalhes do imóvel...</p>
      </div>
    );
  }

  if (!property) {
    return (
      <div className={styles.errorContainer}>
        <h2>Imóvel não encontrado</h2>
        <Link href="/properties" className={styles.backButton}>
          Voltar para Imóveis
        </Link>
      </div>
    );
  }

  const preco = property.finalidade === "Venda" 
    ? property.valorVenda 
    : property.valorAluguel;



  return (
    <div>
      <main className={styles.propertyDetails}>
        <div className={styles.detailsContainer}>
          <div className={styles.propertyGallery}>
            <div className={styles.mainImage}>
              <Image
                src={mainImage}
                alt={property.tipoImovel || "Imóvel"}
                width={600}
                height={400}
                style={{ objectFit: "cover" }}
              />
            </div>
            
            <div className={styles.thumbnailContainer}>
              <Image
                src={property.image || "/placeholder.jpg"}
                alt="Miniatura"
                width={80}
                height={80}
                className={styles.thumbnail}
                onClick={() => setMainImage(property.image || "/placeholder.jpg")}
              />
            </div>
          </div>

          <div className={styles.propertyInfo}>
            <h1>{property.tipoImovel}</h1>
            
            <p className={styles.propertyLocation}>
              <MapPin color="#8d001a" size={20} style={{marginRight: '8px'}} />
              {property.cidade}
            </p>
            
            <p className={styles.propertyPrice}>
              R$ {preco}
              {property.finalidade === "Aluguel" && "/mês"}
            </p>

            <div className={styles.propertyFeatures}>
              <div className={styles.feature}>
                <span>🛏️</span>
                <span>{property.quartos || "-"} Quartos</span>
              </div>
              <div className={styles.feature}>
                <span>🚽</span>
                <span>{property.banheiros || "-"} Banheiros</span>
              </div>
              <div className={styles.feature}>
                <span>📏</span>
                <span>{property.areaTotal || "-"} m²</span>
              </div>
              <div className={styles.feature}>
                <span>🚗</span>
                <span>{property.vagas || "-"} Vagas</span>
              </div>
            </div>

            <div className={styles.propertyDescription}>
              <h2>Descrição</h2>
              <p>
                {property.descricao || 
                  `Excelente ${property.tipoImovel.toLowerCase()} localizado em ${property.cidade}. 
                  Imóvel com ${property.quartos} quartos, ${property.banheiros} banheiros e 
                  ${property.area}m² de área construída. Ótima localização e acabamento de qualidade.`}
              </p>
            </div>

            <div className={styles.actionButtons}>
              <Link href="/contact" className={styles.contactButton}>
                Entrar em Contato
              </Link>
              <Link href="/properties" className={styles.backButtonSecondary}>
                Voltar para Imóveis
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DetailsPage;