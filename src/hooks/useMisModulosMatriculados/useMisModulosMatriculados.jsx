import { useState } from "react";
import { useEffect } from "react";
import modulosMatriculados from "../../mocks/mock-matriculados";

function useMisModulosMatriculados( usuario_ ) {

    const [buscando, setBuscando] = useState(false);

    const [lista, setLista] = useState(modulosMatriculados[usuario_] ? modulosMatriculados[usuario_].lista : []);
    

    return {buscando, lista}

}

export default useMisModulosMatriculados
