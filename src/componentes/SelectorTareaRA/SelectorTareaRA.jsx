import { MenuItem } from "@mui/material"
import { Select } from "@mui/material"
import { InputLabel } from "@mui/material"
import { FormControl } from "@mui/material"
import { useState, useEffect } from "react"

function SelectorTareaRA(props) {



    const [tareaSeleccionada, setTareaSeleccionada] = useState("")

    useEffect(seleccionarTareaInicial, [props.tareasRA])


    function seleccionarTareaInicial() {
        if(props.tareasRA.length > 0) {
            setTareaSeleccionada(props.tareasRA[0].id)
            props.manejarTareaSeleccionada(props.tareasRA[0].id)
        }
    }


    function manejarSeleccionTarea(tarea) {

        const idSeleccionado = tarea.target.value;

        console.log("selec ", idSeleccionado)

        setTareaSeleccionada(idSeleccionado);

        //const tareaObjeto = props.mockTareasRA.lista.find(tarea => tarea.id === idSeleccionado);

        props.manejarTareaSeleccionada(idSeleccionado);



    }

    

    function listarTareas(tarea) {
        return <MenuItem key={tarea.id} value={tarea.id}>{tarea.observaciones}</MenuItem>
    }


    return (
        <>
            <FormControl fullWidth>
                <InputLabel id="selectorTarea">Selector Tarea</InputLabel>
                <Select
                    labelId="selectorTarea"
                    id="selectorTarea"
                    value={tareaSeleccionada}
                    label="Tarea"
                    onChange={manejarSeleccionTarea}
                >
                    {props.tareasRA.map(listarTareas)}
                </Select>
            </FormControl>
        </>
    )
}
export default SelectorTareaRA 