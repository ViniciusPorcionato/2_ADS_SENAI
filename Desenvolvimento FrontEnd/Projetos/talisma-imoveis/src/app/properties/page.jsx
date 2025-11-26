"use client";
import styles from "./properties.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";

export default function PropertiesPage() {
  const [properties, setProperties] = useState([]);
  
  const [filtroTipo, setFiltroTipo] = useState("");
  const [filtroCidade, setFiltroCidade] = useState("");

  useEffect(() => {
    async function fetchProperties() {
      try {
        const response = await fetch("http://localhost:3000/imoveis");
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.error("Erro ao buscar imóveis:", error);
      }
    }
    fetchProperties();
  }, []);

  const filteredProperties = properties.filter((property) => {
    const matchTipo = filtroTipo === "" || property.tipoImovel === filtroTipo;
    const matchCidade = filtroCidade === "" || property.cidade === filtroCidade;
    return matchTipo && matchCidade;
  });

  return (
    <div>
      <div className={styles.termsHeader}>
        <div className={styles.termsHeaderContent}>
          <h1 className={styles.termsTitle}>ESCOLHA O MELHOR PRA VOCÊ</h1>
          <h2 className={styles.termsSubtitle}>Todos os Imóveis</h2>
        </div>
      </div>

      <main className={styles.imoveisContainer}>
        
        {/* --- ÁREA DE FILTROS --- */}
        <div className={styles.filterBar}>
          <div className={styles.formGroup}>
            <label htmlFor="filtro-tipo">Tipo de Imóvel</label>
            <select 
              id="filtro-tipo" 
              value={filtroTipo} 
              onChange={(e) => setFiltroTipo(e.target.value)}
            >
              <option value="">Todos os tipos</option>
              <option value="Apartamento">Apartamento</option>
              <option value="Casa">Casa</option>
              <option value="Terreno">Terreno</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="filtro-cidade">Localização</label>
            <select 
              id="filtro-cidade" 
              value={filtroCidade} 
              onChange={(e) => setFiltroCidade(e.target.value)}
            >
              <option value="">Todas as cidades</option>
              <option value="São Paulo">São Paulo</option>
              <option value="Rio de Janeiro">Rio de Janeiro</option>
              <option value="Belo Horizonte">Belo Horizonte</option>
            </select>
          </div>
          
          {/* Botão opcional para limpar filtros, aparece só se tiver filtro ativo */}
          {(filtroTipo || filtroCidade) && (
             <button 
               className={styles.limparBtn} 
               onClick={() => {setFiltroTipo(""); setFiltroCidade("")}}
             >
               Limpar Filtros
             </button>
          )}
        </div>

        {/* --- CONTADOR DE RESULTADOS --- */}
        <div className={styles.resultadoContador}>
           {filteredProperties.length} imóveis encontrados
        </div>

        <div className={styles.cardsContainer}>
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property) => (
              <div className={styles.propertyCard} key={property.id}>
                <div className={styles.cardImage}>
                  {/* Nota: Adicionei uma validação simples para a imagem */}
                  <Image
                    src={property.image || "/placeholder.jpg"} 
                    alt={property.title || "Imóvel"}
                    width={500}
                    height={300}
                  />
                </div>

                <div className={styles.cardContent}>
                  <h2 className={styles.propertyTitle}>{property.tipoImovel}</h2>

                  <div className={styles.propertyInfo}>
                    <span className={styles.location}>
                      <MapPin color="#8d001a" size={18} style={{marginRight: '4px'}} />
                      {property.cidade}
                    </span>

                    <span className={styles.price}>
                      R${" "}
                      {property.finalidade === "Venda"
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
            ))
          ) : (
            <div className={styles.noResults}>
              <p>Nenhum imóvel encontrado com esses filtros.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}