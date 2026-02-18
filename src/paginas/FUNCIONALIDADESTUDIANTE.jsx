
import {useState} from "react"
import TabularMenu from "../componentes/TabularMenu/TabularMenu"
import opcionesFuncionalidadEstudiante from "../mocks/mock-FUNCIONALIDADESTUDIANTE"

import ProgresoCompletoAlumno from "../componentes/ProgresoCompletoAlumno/ProgresoCompletoAlumno"
import RevisionesPendientes from "../componentes/RevisionesPendientes/RevisionesPendientes"
import NuevaEvidencia from "../componentes/NuevaEvidencia/NuevaEvidencia"


function FuncionalidadEstudiante() {

    const [opcionSeleccionada, setOpcionSeleccionada] = useState(0)
    
    function manejarSeleccion(opcionSeleccionada) {
        setOpcionSeleccionada(opcionSeleccionada)
    }

    function renderizarComponente() {
        switch(opcionSeleccionada) {
            case 0:
                return <ProgresoCompletoAlumno/>; break;
            case 1:
                return <NuevaEvidencia/>; break;
            case 2:
                return <RevisionesPendientes/>; break;
            default:
                return <>sss</>; break;
        }
    }
    
    return (
        <div>
            <TabularMenu lista={opcionesFuncionalidadEstudiante} 
            opcionPorDefecto={0} 
            manejarOpcionSeleccionada={manejarSeleccion}/>
            {renderizarComponente()}
        </div>
    )
}
export default FuncionalidadEstudiante