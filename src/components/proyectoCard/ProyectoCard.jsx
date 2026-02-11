import './ProyectoCard.css'

export default function ProyectoCard({
  titulo,
  descripcion,
  tecnologias,
  github,
  demo
}) {
  return (
    <article className="proyecto-card">
      <h3>{titulo}</h3>

      <p>{descripcion}</p>

      <span>{tecnologias}</span>

      <div className="proyecto-links">
        <a href={github} className="btn" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={demo} className="btn primary" target="_blank" rel="noreferrer">
          Demo
        </a>
      </div>
    </article>
  )
}
