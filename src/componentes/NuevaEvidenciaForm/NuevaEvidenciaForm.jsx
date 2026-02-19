import { useForm } from "react-hook-form"
import { useState } from "react"
import { TextField } from "@mui/material"
import { TextareaAutosize } from "@mui/material"
import { Button } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import UserContext from "../../contextos/UserContext"
import { useContext } from "react"
import useEvidencias from "../../hooks/useEvidencias/useEvidencias"


function NuevaEvidenciaForm(props) {

    const { user } = useContext(UserContext);
    const { lista,cargando,crearEvidencia } = useEvidencias();

    console.log("FORM ", props.tarea)

    const EVIDENCIA = {

        // Identificadores de los campos del formulario, se los asignaremos al atributo id
        URL: "url",
        DESCRIPCION: "descripcion"
    }

    // Objeto coche en su estado inicial
    const EVIDENCIAINICIAL = {
        tarea_id: props.tarea.id,
        estudiante_id: user,
        url: "",
        descripcion: "",
        estado_validacion: "pendiente"
    }

    const { register,
        handleSubmit,
        reset,
        formState: { errors },
        watch } = useForm({ defaultValues: EVIDENCIAINICIAL });

    console.log(errors);

    // Función encargada de actualiar el hook de estado del componente y
    // devolver el coche creado al objeto padre
    const manejarFormulario = handleSubmit((NuevaEvidencia) => {

        crearEvidencia(NuevaEvidencia).then ((evidenciaCreada) => {
            if (Object.keys(evidenciaCreada).length > 0) {
                 console.log("Evidencia creada");
                reset(EVIDENCIAINICIAL);
            }
            else {
                console.log("Error al crear la evidencia");
            }
        })
    })

    return (
        <form id="formulario" onSubmit={manejarFormulario}>
            <TextField
                id="urlEvidencia"
                label={EVIDENCIA.URL}
                variant="outlined"
                type="text"
                fullWidth
                {...register(EVIDENCIA.URL, {
                    required: "La URL es obligatoria",
                    pattern: {
                        value: /^www\.[\w-]+\.[a-zA-Z]{2,}$/,
                        message: "El formato de la URL no es válido"
                    }
                })}
                error={!!errors.url}
                helperText={errors.url?.message}
            />

            <TextField
                id="descripcionEvidencia"
                label={EVIDENCIA.DESCRIPCION}
                variant="outlined"
                type="text"
                fullWidth
                {...register(EVIDENCIA.DESCRIPCION, {
                    required: "La descripción es obligatoria"
                })}
                error={!!errors.descripcion}
                helperText={errors.descripcion?.message}
            />

            <Button disabled={props.cargando} variant="contained" endIcon={<SendIcon />} type="submit">{props.cargando ? "Guardando..." 
                                                                : "Guardar Evidencia"}
            </Button>
            <br></br>
        </form>
    )
}
export default NuevaEvidenciaForm