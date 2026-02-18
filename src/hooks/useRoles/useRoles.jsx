import { useState } from "react";
//import roles from "../../mocks/mock-roles";
import getRoles from "../../servicios/roles/getRoles";
import { useEffect } from "react";

function useRoles(usuario) {


    const [buscando, setBuscando] = useState(false);

    //const [lista, setLista] = useState(roles[usuario] ? roles[usuario].roles : []);

    const [lista, setLista] = useState([]);

    function obtenerRoles() {
        setBuscando(true);
        getRoles().then((listaRoles) => {

            const rolesUsuario = listaRoles[usuario]?.roles || []

            setLista(rolesUsuario)

            setBuscando(false)
        })
    }
    
    
    useEffect(obtenerRoles, [])
    
    return {buscando, lista}
    
}

export default useRoles
