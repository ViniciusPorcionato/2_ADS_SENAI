import styles from "./terms.module.css";

export const metadata = {
  title: "Termos e Condições | Talismã Imóveis",
};

const termsPage = () => {
  return (
    <div className={styles.termsPage}>
      <div className={styles.termsHeader}>
        <div className={styles.termsHeaderContent}>
          <h1 className={styles.termsTitle}>TERMOS DE USO</h1>
          <h2 className={styles.termsSubtitle}>Termos e Condições</h2>
        </div>
      </div>

      <div className={styles.termsContainer}>
        <div className={styles.termsContent}>
          <section className={styles.termsSection}>
            <h3>1. Objetivo do Site</h3>
            <p>
              1.1 Este site tem como finalidade apresentar imóveis disponíveis
              para venda ou locação.
            </p>
            <p>
              1.2 Não são realizadas transações comerciais diretas por meio do
              site.
            </p>
            <p>
              1.3 Ao se interessar por um imóvel, o usuário será direcionado
              para atendimento com um de nossos corretores.
            </p>
          </section>

          <section className={styles.termsSection}>
            <h3>2. Uso do Site</h3>
            <p>
              2.1 O usuário concorda em utilizar este site de forma ética e
              respeitosa...
            </p>
            <p>
              2.2 As informações disponibilizadas no site são atualizadas
              periodicamente...
            </p>
            <p>
              2.3 A Talismã Imóveis não se responsabiliza por erros de
              digitação...
            </p>
          </section>

          <section className={styles.termsSection}>
            <h3>3. Informações dos Imóveis</h3>
            <p>
              3.1 As imagens e descrições são meramente ilustrativas e podem ser
              alteradas sem aviso prévio.
            </p>
            <p>
              3.2 A disponibilidade e os valores devem ser confirmados com
              nossos corretores.
            </p>
          </section>

          <section className={styles.termsSection}>
            <h3>4. Privacidade e Proteção de Dados</h3>
            <p>
              4.1 Os dados fornecidos serão utilizados exclusivamente para fins
              de atendimento.
            </p>
            <p>
              4.2 A Talismã Imóveis compromete-se a proteger a privacidade dos
              usuários.
            </p>
          </section>

          <section className={styles.termsSection}>
            <h3>5. Atendimento com Corretores</h3>
            <p>
              5.1 Após manifestar interesse em um imóvel, o usuário será
              redirecionado para um corretor credenciado.
            </p>
          </section>

          <section className={styles.termsSection}>
            <h3>6. Disposições Gerais</h3>
            <p>6.1 Estes Termos podem ser atualizados a qualquer momento.</p>
            <p>6.2 O uso continuado implica aceitação total dos termos.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default termsPage;
