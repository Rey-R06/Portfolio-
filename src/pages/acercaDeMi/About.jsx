import "./About.css";

export default function About() {
  const certificados = [
    {
      nombre: "Curso definitivo de html y css",
      institucion: "Platzi en conjunto con Cesde",
      fecha: "2024",
      archivo: "/diplomas/diploma-html-css.pdf",
    },
    {
      nombre: "Java Basico",
      institucion: "Platzi en conjunto con Cesde",
      fecha: "2024",
      archivo: "/diplomas/diploma-java-basico.pdf",
    },
    {
      nombre: "Java OOP",
      institucion: "Platzi en conjunto con Cesde",
      fecha: "2024",
      archivo: "/diplomas/diploma-java-oop.pdf",
    },
    {
      nombre: "Javascript",
      institucion: "Platzi en conjunto con Cesde",
      fecha: "2025",
      archivo: "/diplomas/diploma-javascript.pdf",
    },
    {
      nombre: "Mobile first",
      institucion: "Platzi en conjunto con Cesde",
      fecha: "2024",
      archivo: "/diplomas/diploma-mobile-first.pdf",
    },
  ];

  return (
    <section className="about">
      <article className="about-container">
        <div className="about-text">
          <h2>Sobre mí</h2>

          <p>
            Desarrollador frontend con formación técnica en Desarrollo de
            Software y experiencia en construcción de aplicaciones modernas con
            React y Spring Boot. Soy Técnico Laboral por Competencias como
            Asistente en Desarrollo de Software (CESDE) y actualmente curso
            Tecnología en Desarrollo de Software en el ITM. Desde temprana edad
            he enfocado mi crecimiento en el desarrollo de soluciones digitales
            reales, combinando frontend, backend y buenas prácticas de
            arquitectura.
          </p>

          <p>
            Me apasiona aprender, enfrentar retos tecnológicos y mejorar
            constantemente mis habilidades técnicas. Busco seguir creciendo como
            desarrollador full stack y especializarme en desarrollo de software
            profesional.
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

      <article className="about-education">
        <h3>Formación Académica</h3>

        <div className="education-horizontal">
          <div className="education-card">
            <div className="education-circle"></div>
            <h4>Técnico Laboral en Desarrollo de Software</h4>
            <p>CESDE – Medellín</p>
            <small>2025 · 694 horas certificadas</small>

            <a
              href="/diplomas/título-de-técnico.pdf"
              target="_blank"
              rel="noreferrer"
              className="education-link"
            >
              Ver título
            </a>
          </div>

          <div className="education-card">
            <div className="education-circle"></div>
            <h4>Tecnología en Desarrollo de Software (En curso)</h4>
            <p>ITM – Instituto Tecnológico Metropolitano</p>
            <small>2026 – Actualidad</small>
          </div>
        </div>
      </article>

      <article className="about-certificados">
        <h3>Certificaciones</h3>

        <div className="certificados-grid">
          {certificados.map((cert, index) => (
            <div className="certificado-card" key={index}>
              <h4>{cert.nombre}</h4>
              <p>{cert.institucion}</p>
              <small>{cert.fecha}</small>

              <a href={cert.archivo} target="_blank" rel="noreferrer">
                Ver certificado
              </a>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
