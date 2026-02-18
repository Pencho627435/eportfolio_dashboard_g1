import { useState } from "react"
import SelectorTareaRA from "../SelectorTareaRA/SelectorTareaRA"
import NuevaEvidenciaForm from "../NuevaEvidenciaForm/NuevaEvidenciaForm"

import mockTareasRA from "../../mocks/mock-tareasRA"

function NuevaEvidencia() {

    const [tareaSeleccionada, setTareaSeleccionada] = useState(mockTareasRA.lista[0]);

    function manejarTareaSeleccionada(tarea) {
        console.log("Tarea seleccionada", tarea)
        setTareaSeleccionada(tarea)
    }

    function manejarNuevaEvidencia(evidencia) {
        console.log("Nueva evidencia", evidencia)
    }


    return (

        <>
            <SelectorTareaRA mockTareasRA={mockTareasRA} 
                             manejarTareaSeleccionada={manejarTareaSeleccionada}></SelectorTareaRA>
            <NuevaEvidenciaForm tarea={tareaSeleccionada} manejarNuevaEvidencia={manejarNuevaEvidencia}></NuevaEvidenciaForm>
        </>

    )

}
export default NuevaEvidencia