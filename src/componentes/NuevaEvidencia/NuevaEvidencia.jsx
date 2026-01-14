function NuevaEvidencia(props) {

    const [tareaSeleccionada, setTareaSeleccionada] = useState(lasTareas);

    function manejarTareaSeleccionada(tarea) {
        console.log("Tarea seleccionada", tarea)
        setTareaSeleccionada(tarea)
    }

    return (

        <>
        <SelectorTareaRA manejarTareaSeleccionada={manejarTareaSeleccionada}></SelectorTareaRA>
        <NuevaEvidenciaForm tarea={props.tarea}></NuevaEvidenciaForm>
        </>

    )

}
export default NuevaEvidencia