import styles from './about.module.css';

export const metadata = {
  title: "Sobre Nós | Talismã Imóveis",
};

const AboutPage = () => {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.aboutHeader}>
        <div className={styles.aboutHeaderContent}>
          <h1 className={styles.aboutTitle}>SOBRE NÓS</h1>
          <h2 className={styles.aboutSubtitle}>Informações nossa empresa</h2>
        </div>
      </div>

      <div className={styles.aboutContainer}>
        <div className={styles.aboutContent}>
          <div className={styles.aboutSection}>
            <h3>Sobre nossa empresa</h3>
            <p>
              TALISMÃ IMÓVEIS iniciou suas atividades visando construir a sua
              história no mercado imobiliário de São Paulo, de forma sólida,
              confiável e duradoura.
            </p>
            <p>
              Trata-se de imobiliária atuante no mercado, com um histórico
              íntegro e de ótimas negociações. Ética profissional e
              transparência são imprescindíveis no mercado imobiliário.
            </p>
            <p>
              A busca pela excelência é à maneira crescimento neste mercado,
              sendo assim, a TALISMÃ IMÓVEIS oferece para o seus clientes um
              atendimento personalizado, o que resulta em segurança a todos os
              negócios realizados, satisfazendo os nossos clientes.
            </p>
            <p>
              A atuação com dinamismo e profissionalismo na prestação de
              serviços, faz da TALISMÃ IMÓVEIS uma das empresas mais eficientes
              no mercado imobiliário regional.
            </p>
            <p>Venha conosco, faça parte desta família você também!</p>
            <p>
              <strong>TALISMÃ IMÓVEIS</strong> <br />
              Rua Paulo Nunes Félix, Parque São Rafael - São Paulo – CEP
              08320-370. (11) 3427- 4938
            </p>
            <p>
              <strong>
                Segunda a Sexta das 9:00 as 17:00 e ao Sábados 9:00 ao 12:00
              </strong>
            </p>
            <p>
              <strong>
                Localização - Rua Paulo Nunes Félix, 534, Parque São Rafael, São
                Paulo
              </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;