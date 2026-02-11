import "./About.css";

export default function About() {
  return (
    <section className="about">
      <article className="about-container">
        <div className="about-text">
          <h2>Sobre mí</h2>

          <p>
            Soy desarrollador frontend con experiencia en React y consumo de
            APIs REST. Actualmente trabajo también con Java y Spring Boot para
            desarrollar aplicaciones full stack.
          </p>

          <p>
            Me enfoco en crear interfaces modernas, limpias y escalables,
            aplicando buenas prácticas y arquitectura organizada.
          </p>

          <div className="about-skills">
            <span>React</span>
            <span>Java</span>
            <span>Spring Boot</span>
            <span>CSS</span>
            <span>APIs REST</span>
            <span>MySQL</span>
          </div>
        </div>

        <div className="about-image">
          <img src="/img/perfil-test.avif" alt="Foto perfil" />
        </div>
      </article>
      
      <article className="about-certificados">
        <h3>Certificaciones</h3>

        <div className="certificados-grid">
          <div className="certificado-card">
            <h4>Desarrollo Web con React</h4>
            <p>Plataforma XYZ - 2025</p>
            <a href="#" target="_blank" rel="noreferrer">
              Ver certificado
            </a>
          </div>

          <div className="certificado-card">
            <h4>Java + Spring Boot</h4>
            <p>Plataforma XYZ - 2025</p>
            <a href="#" target="_blank" rel="noreferrer">
              Ver certificado
            </a>
          </div>

          <div className="certificado-card">
            <h4>Fundamentos de Base de Datos</h4>
            <p>Plataforma XYZ - 2024</p>
            <a href="#" target="_blank" rel="noreferrer">
              Ver certificado
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}
