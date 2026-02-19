import { useState } from "react";
import newEvidencia from "../../servicios/evidencias/newEvidencia";
import { useEffect } from "react";

function useEvidencias() {

    const [lista, setLista] = useState([]);
    const [cargando, setCargando] = useState(false);

    function crearEvidencia(evidencia_) {
        setCargando(true);

      return newEvidencia(evidencia_).then((evidenciaCreada) => {

            if (Object.keys(evidenciaCreada).length > 0) {
                setLista(prev => [...prev, evidenciaCreada])
            }
            setCargando(false)
            return evidenciaCreada;
        })
    }
    
    
    
    return {cargando, lista, crearEvidencia}
    
}

export default useEvidencias