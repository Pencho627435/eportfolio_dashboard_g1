
import NuevaEvidencia from "../NuevaEvidencia/NuevaEvidencia";

function Dashboard(props) {

    return (

        <main>
            <p>Main {props.token}</p>
            <div className='row'>
                <div className='col-12'>
                    <NuevaEvidencia tarea={props.tarea}></NuevaEvidencia>
                </div>
            </div>
        </main>
    )

}
export default Dashboard