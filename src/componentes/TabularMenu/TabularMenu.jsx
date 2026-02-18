
import { useState } from "react"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"

function TabularMenu(props) {

    const [opcionSeleccionada, setOpcionSeleccionada] = useState(props.opcionPorDefecto)

    function manejarOpcionSeleccionada(event, nuevaOpcion) {
        setOpcionSeleccionada(nuevaOpcion)
        props.manejarOpcionSeleccionada(nuevaOpcion)
    }

    function opcionTab(opcion, index) {
        return (
            <Tab label={opcion} key={opcion + index}/>
        )
    }
    
    return (
        <Tabs value={opcionSeleccionada} 
            onChange={manejarOpcionSeleccionada}
            aria-label="basic tabs example">

            {props.lista.map(opcionTab)}
            
        </Tabs>
    )
}
export default TabularMenu