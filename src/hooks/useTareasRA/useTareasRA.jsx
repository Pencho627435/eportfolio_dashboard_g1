import { useState } from "react";
import getTareasRA from "../../servicios/tareas/getTareasRA";
import { useEffect } from "react";

function useTareasRA() {


    const [buscando, setBuscando] = useState(false);


    const [lista, setLista] = useState([]);

    function obtenerTareasRA() {
        setBuscando(true);
        getTareasRA().then((listaTareasRA) => {

            setLista(listaTareasRA.lista)

            setBuscando(false)
        })
    }
    
    
    useEffect(obtenerTareasRA, [])
    
    return {buscando, lista}
    
}

export default useTareasRA