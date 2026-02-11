import Inicio from "../pages/inicio/Inicio"
import Proyectos from "../pages/proyectos/Proyectos"
import About from "../pages/acercaDeMi/About"

export let enrutador = [
    {
        path: '/',
        element: <Inicio />
    },
    {
        path: "/proyectos",
        element: <Proyectos />
    },
    {
        path: "/proyectos",
        element: <Proyectos />
    },
    {
        path: "/acerca-de-mi",
        element: <About />
    },
]