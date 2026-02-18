import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { useState } from "react"
import useRoles from "../../hooks/useRoles/useRoles"
import useMisModulosImpartidos from "../../hooks/useMisModulosImpartidos/useMisModulosImpartidos"
import useMisModulosMatriculados from "../../hooks/useMisModulosMatriculados/useMisModulosMatriculados"
import adminMenu from "../../mocks/mock-administrador"

function MenuRoles(props) {

    const { lista:roles } = useRoles(props.usuario)

    const { lista: modulosImpartidos } = useMisModulosImpartidos(props.usuario)
    const { lista: modulosMatriculados } = useMisModulosMatriculados(props.usuario)

    function opcionAcordeon(opcion) {
        return (
            <AccordionDetails key={opcion.nombre}>
                <Link to={opcion.ruta}>{opcion.nombre}</Link>
            </AccordionDetails>
        )
    }

    function mostarAcordeon(opcionMenu, index) {

        let listaOpciones = []

        if(opcionMenu === "administrador") {
            listaOpciones = adminMenu.administrador
        }

        if(opcionMenu === "docente") {
            listaOpciones = modulosImpartidos.map(modulo => {
                return {
                    nombre: modulo.nombre,
                    ruta: `/funcionalidaddocente/${modulo.id}`
                }
            })
        }

        if(opcionMenu === "estudiante") {
            listaOpciones = modulosMatriculados.map(modulo => {
                return {
                    nombre: modulo.nombre,
                    ruta: `/funcionalidadestudiante/${modulo.id}`
                }
            })
        }
        
        return (
            
               <Accordion key={opcionMenu}>
                   <AccordionSummary
                       expandIcon={""}
                       aria-controls="panel1-content"
                       id="panel1-header"
                   >
                       <Typography component="span">{opcionMenu.toUpperCase()}</Typography>
                   </AccordionSummary>
                   {listaOpciones.map(opcionAcordeon)}
               </Accordion>
            
        )
    }

return (

    <>
        {roles.map(mostarAcordeon)}
    </>
)

}
export default MenuRoles