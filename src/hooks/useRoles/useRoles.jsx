import { useState } from "react";
import roles from "../../mocks/mock-roles";

function useRoles(usuario) {


    const [buscando, setBuscando] = useState(false);

    const [lista, setLista] = useState(roles[usuario] ? roles[usuario].roles : []);
    
    return {buscando, lista}
    
}

export default useRoles
