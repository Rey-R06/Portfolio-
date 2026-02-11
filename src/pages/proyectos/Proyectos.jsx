import './Proyectos.css'
import ProyectoCard from '../../components/proyectoCard/ProyectoCard'

export default function Proyectos() {
  return (
    <section className="proyectos">
      <h2>Proyectos</h2>

      <div className="proyectos-grid">

        <ProyectoCard
          titulo="Gestor de Inventario"
          descripcion="Aplicación web para la gestión de productos, usuarios y pedidos."
          tecnologias="React · CSS · API REST"
          github="#"
          demo="#"
        />

        <ProyectoCard
          titulo="CMS JolyGuacamoly"
          descripcion="CMS para gestión de productos y clientes con panel administrador."
          tecnologias="React · Tailwind · Spring Boot"
          github="#"
          demo="#"
        />

      </div>
    </section>
  )
}
