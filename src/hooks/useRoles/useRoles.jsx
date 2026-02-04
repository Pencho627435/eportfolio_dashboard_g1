import { useState } from "react";
import roles from "../../mocks/mock-roles";

function useRoles(usuario_) {


    const [buscando, setBuscando] = useState(false);

    const [lista, setLista] = useState(roles[usuario_] ? roles[usuario_].roles : []);
    
    return {buscando, lista}
    
}

export default useRoles
