import { useState } from "react"
import SelectorTareaRA from "../SelectorTareaRA/SelectorTareaRA"
import NuevaEvidenciaForm from "../NuevaEvidenciaForm/NuevaEvidenciaForm"

//import mockTareasRA from "../../mocks/mock-tareasRA"
import useTareasRA from "../../hooks/useTareasRA/useTareasRA"
import { useEffect } from "react"

function NuevaEvidencia() {

    const {lista : tareasRA} = useTareasRA();
    const [tareaSeleccionada, setTareaSeleccionada] = useState(null);

    useEffect(seleccionarTareaInicial, [tareasRA])

    function seleccionarTareaInicial() {
        if(tareasRA.length > 0) {
            setTareaSeleccionada(tareasRA[0])
        }
    }
        

    function manejarTareaSeleccionada(idTarea) {

        const tareaObjeto = tareasRA.find(t => t.id === idTarea);
        setTareaSeleccionada(tareaObjeto);
    }

    function manejarNuevaEvidencia(evidencia) {
        console.log("Nueva evidencia", evidencia)
    }


    return (

        <>
            <SelectorTareaRA tareasRA={tareasRA} 
                             manejarTareaSeleccionada={manejarTareaSeleccionada}></SelectorTareaRA>
            {tareaSeleccionada && (<NuevaEvidenciaForm tarea={tareaSeleccionada} manejarNuevaEvidencia={manejarNuevaEvidencia}></NuevaEvidenciaForm>)}
        </>

    )

}
export default NuevaEvidencia