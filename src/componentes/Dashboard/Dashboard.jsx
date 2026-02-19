
import { Routes, Route } from "react-router-dom"
import FuncionalidadDocente from "../../paginas/FUNCIONALIDADDOCENTE"
import FuncionalidadEstudiante from "../../paginas/FUNCIONALIDADESTUDIANTE"
import PaginaFamiliasProfesionales from "../../paginas/PaginaFamiliasProfesionales"

function Dashboard(props) {

    return (

        <main>
            <Routes>
                <Route path="/funcionalidaddocente/:modulo" element={<FuncionalidadDocente/>} />
                <Route path="/funcionalidadestudiante/:modulo" element={<FuncionalidadEstudiante tarea={props.tarea}/>} />
                <Route path="/familiasprofesionales" element={<PaginaFamiliasProfesionales/>} />
            </Routes>
        </main>
    )

}
export default Dashboard