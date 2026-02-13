import { useState } from "react";
import "./contacto.css";

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí luego conectaremos backend
    console.log(form);

    setEnviado(true);

    setForm({
      nombre: "",
      email: "",
      mensaje: "",
    });

    setTimeout(() => {
      setEnviado(false);
    }, 3000);
  };

  return (
    <section className="contacto">
      <div className="contacto-container">

        <h2>Contacto</h2>
        <p>¿Te interesa trabajar conmigo? Escríbeme.</p>

        <form className="contacto-form" onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Nombre</label>
            <input
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              required
              placeholder="Tu nombre"
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="tu@email.com"
            />
          </div>

          <div className="form-group">
            <label>Mensaje</label>
            <textarea
              name="mensaje"
              rows="5"
              value={form.mensaje}
              onChange={handleChange}
              required
              placeholder="Escribe tu mensaje..."
            />
          </div>

          <button type="submit" className="btn primary">
            Enviar mensaje
          </button>

          {enviado && (
            <p className="mensaje-exito">
              ✅ Mensaje enviado correctamente
            </p>
          )}

        </form>

      </div>
    </section>
  );
}
