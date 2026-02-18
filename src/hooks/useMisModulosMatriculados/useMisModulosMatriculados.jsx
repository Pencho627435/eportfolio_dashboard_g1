import { useState } from "react";
import { useEffect } from "react";
import modulosMatriculados from "../../mocks/mock-matriculados";

function useMisModulosMatriculados( usuario ) {

    const [buscando, setBuscando] = useState(false);

    const [lista, setLista] = useState(modulosMatriculados[usuario] ? modulosMatriculados[usuario].lista : []);
    

    return {buscando, lista}

}

export default useMisModulosMatriculados
