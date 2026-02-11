import "./Inicio.css";


export default function Inicio() {
  return (
    <>
      <section className="inicio">
        <div className="inicio-container">
          <div className="inicio-texto">
            <h1>
              Hola, soy <span>Desarrollador Frontend</span>
            </h1>

            <p>
              Desarrollo interfaces web modernas y funcionales con React,
              enfocadas en una excelente experiencia de usuario.
            </p>

            <div className="inicio-botones">
              <a href="/proyectos" className="btn primary">
                Ver proyectos
              </a>
              <a href="/contact" className="btn">
                Contacto
              </a>
            </div>
          </div>

          <div className="inicio-imagen">
            <div className="placeholder">
              <img src="/img/perfil-test.avif" alt="foto" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
