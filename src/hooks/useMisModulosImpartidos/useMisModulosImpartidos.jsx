

import { useState } from "react";
import { useEffect } from "react";
import modulosImpartidos from "../../mocks/mock-impartidos";

function useMisModulosImpartidos(usuario_) {


    const [buscando, setBuscando] = useState(false);

    const [lista, setLista] = useState(modulosImpartidos[usuario_] ? modulosImpartidos[usuario_].lista : []);
    
    
    return {buscando, lista}

}

export default useMisModulosImpartidos
