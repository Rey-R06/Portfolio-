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
