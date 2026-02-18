

import { useState } from "react";
import { useEffect } from "react";
import modulosImpartidos from "../../mocks/mock-impartidos";

function useMisModulosImpartidos(usuario) {


    const [buscando, setBuscando] = useState(false);

    const [lista, setLista] = useState(modulosImpartidos[usuario] ? modulosImpartidos[usuario].lista : []);
    
    
    return {buscando, lista}

}

export default useMisModulosImpartidos
