import { useState } from "react";
import getFamiliasProfesionales from "../../servicios/familiasProfesionales/getFamiliasProfesionales";
import { useEffect } from "react";

function useFamiliasProfesionales() {


    const [buscando, setBuscando] = useState(false);


    const [lista, setLista] = useState([]);

    function obtenerFamiliasProfesionales() {
        setBuscando(true);
        getFamiliasProfesionales().then((listaFamiliasProfesionales) => {

            setLista(listaFamiliasProfesionales)

            setBuscando(false)
        })
    }
    
    
    useEffect(obtenerFamiliasProfesionales, [])
    
    return {buscando, lista}
    
}

export default useFamiliasProfesionales