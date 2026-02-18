

import { useState } from "react";
import { useEffect } from "react";
//import modulosImpartidos from "../../mocks/mock-impartidos";
import getMisModulosImpartidos from "../../servicios/modulos/getMisModulosImpartidos";

function useMisModulosImpartidos(usuario) {


    const [buscando, setBuscando] = useState(false);

    //const [lista, setLista] = useState(modulosImpartidos[usuario] ? modulosImpartidos[usuario].lista : []);
    const [lista, setLista] = useState([]);
    
    function obtenerMisModulosImpartidos() {
        setBuscando(true);
        getMisModulosImpartidos().then((listaModulosImpartidos) => {

            const modulosImpartidosUsuario = listaModulosImpartidos[usuario]?.lista || []

            setLista(modulosImpartidosUsuario)

            setBuscando(false)
        })
    }

    useEffect(obtenerMisModulosImpartidos, [])
    
    
    return {buscando, lista}

}

export default useMisModulosImpartidos
