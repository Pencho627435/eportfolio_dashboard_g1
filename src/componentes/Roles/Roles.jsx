function Roles(props) {

    return (
        <aside>
            <p>Roles {props.menu}</p>
            <Accordion usuario={props.menu}></Accordion>
        </aside>
    )

}
export default Roles