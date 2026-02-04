import { MenuItem } from "@mui/material"
import { Select } from "@mui/material"
import { InputLabel } from "@mui/material"
import { FormControl } from "@mui/material"
import { useState, useEffect } from "react"

function SelectorTareaRA(props) {



    const [tareaSeleccionada, setTareaSeleccionada] = useState(props.mockTareasRA.lista[0].id)


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
                    {props.mockTareasRA.lista.map(listarTareas)}
                </Select>
            </FormControl>
        </>
    )
}
export default SelectorTareaRA 