import {useState} from "react"
import TabularMenu from "../componentes/TabularMenu/TabularMenu"
import opcionesFuncionalidadDocente from "../mocks/mock-FUNCIONALIDADDOCENTE"

import PlanificarCriterios from "../componentes/PlanificarCriterios/PlanificarCriterios"
import EvaluarEvidencias from "../componentes/EvaluarEvidencias/EvaluarEvidencias"
import AsignarRevisiones from "../componentes/AsignarRevisiones/AsignarRevisiones"


function FuncionalidadDocente() {

    const [opcionSeleccionada, setOpcionSeleccionada] = useState(0)
    
    function manejarSeleccion(opcionSeleccionada) {
        setOpcionSeleccionada(opcionSeleccionada)
    }

    function renderizarComponente() {
        switch(opcionSeleccionada) {
            case 0:
                return <PlanificarCriterios/>; break;
            case 1:
                return <EvaluarEvidencias/>; break;
            case 2:
                return <AsignarRevisiones/>; break;
            default:
                return <>sss</>; break;
        }
    }
    
    return (
        <div>
            <TabularMenu lista={opcionesFuncionalidadDocente} 
            opcionPorDefecto={0} 
            manejarOpcionSeleccionada={manejarSeleccion}/>
            {renderizarComponente()}
        </div>
    )
}
export default FuncionalidadDocente