import { useState } from "react";
import { useEffect } from "react";
//import modulosMatriculados from "../../mocks/mock-matriculados";
import getMisModulosMatriculados from "../../servicios/modulos/getMisModulosMatriculados";

function useMisModulosMatriculados( usuario ) {

    const [buscando, setBuscando] = useState(false);

    //const [lista, setLista] = useState(modulosMatriculados[usuario] ? modulosMatriculados[usuario].lista : []);

    const [lista, setLista] = useState([]);
    function obtenerMisModulosMatriculados() {
        setBuscando(true);
        getMisModulosMatriculados().then((listaModulosMatriculados) => {

            const modulosMatriculadosUsuario = listaModulosMatriculados[usuario]?.lista || []

            setLista(modulosMatriculadosUsuario)

            setBuscando(false)
        })
    }
    
    
    useEffect(obtenerMisModulosMatriculados, [])
    
    return {buscando, lista}

}

export default useMisModulosMatriculados
