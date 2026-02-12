import Layout from "../layout/Layout";
import Inicio from "../pages/inicio/Inicio"
import Proyectos from "../pages/proyectos/Proyectos"
import About from "../pages/acercaDeMi/About"

export const enrutador = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Inicio /> },
      { path: "projects", element: <Proyectos /> },
      { path: "about", element: <About /> },
     /* { path: "contact", element: <Contacto /> },*/
    ],
  },
];


