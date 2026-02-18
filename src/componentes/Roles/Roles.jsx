import MenuRoles from "../MenuRoles/MenuRoles"
function Roles(props) {

    return (
        <aside>
            <p>Roles {props.menu}</p>
            <MenuRoles usuario={props.menu}></MenuRoles>
        </aside>
    )

}
export default Roles