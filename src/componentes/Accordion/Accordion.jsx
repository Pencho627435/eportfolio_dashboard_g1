import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { useState } from "react"
import useRoles from "../../hooks/useRoles/useRoles"

function Accordion(props) {

    const { roles } = useRoles(props.usuario_)

    function generarOpcionesAcordeon(rol, index) {
        return (
            <>
                <AccordionDetails key={index}>
                    <Link to={rol.roles}>{rol.roles}</Link>
                </AccordionDetails>
            </>
        )
    }

    function generarAcordeon(rol, index) {
        return (
            <>
                <Accordion>
                    <AccordionSummary
                        expandIcon={""}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography component="span">{rol.roles}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {rol.lista.map(generarOpcionesAcordeon)}
                    </AccordionDetails>
                </Accordion>
            </>
        )
    }


}
return (

    <>
        {roles.map(generarAcordeon)}
    </>
)


export default Accordion