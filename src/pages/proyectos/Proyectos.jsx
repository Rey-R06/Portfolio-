import "./Proyectos.css";
import ProyectoCard from "../../components/proyectoCard/ProyectoCard";

export default function Proyectos() {
  return (
    <section className="proyectos">
      <h2>Proyectos</h2>

      <div className="proyectos-grid">
        <ProyectoCard
          titulo="JolyDips – Sistema de Gestión de Pedidos (Frontend)"
          descripcion="JolyDips es una aplicación web desarrollada con React + Vite que permite la gestión completa de pedidos para un negocio de productos alimenticios.
          El sistema se conecta a una API REST construida en Spring Boot y desplegada en Railway, permitiendo una arquitectura full stack moderna y escalable."
          tecnologias="React · CSS · API REST · Bootstrap · SweetAlert2"
          github="https://github.com/Rey-R06/Joly-Guacamoly-React"
          demo="https://joly-guacamoly-react.vercel.app/"
        />
      </div>
    </section>
  );
}
