import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cabecera from './componentes/Cabecera/Cabecera'
import Dashboard from './componentes/Dashboard/Dashboard'
import Roles from './componentes/Roles/Roles'
import TokenContext from './contextos/TokenContext'
import UserContext from './contextos/UserContext'
import SelectorTareaRA from './componentes/SelectorTareaRA/SelectorTareaRA'
import NuevaEvidenciaForm from './componentes/NuevaEvidenciaForm/NuevaEvidenciaForm'




function App() {

  const usuario = "usuarioAPPPP"
  const token = "abcd.efgh.ijkl.mnop"
  const menu = "menú1"

  const [user, setUser] = useState(usuario)

  const tarea = {id: 1,
 observaciones: "adwadadadwad"}

  return (
    <>
      <TokenContext.Provider value={token}>
        <div className='container-fuid'>
          <div className='row'>
            <div className='col-12 fondoCabecera'>
              <Cabecera usuario={user}></Cabecera>
            </div>
          </div>
          <UserContext.Provider value={user}>
            <div className='row'>
              <div className='col-3 fondoRoles'>
                <Roles menu={user}></Roles>
              </div>
              <div className='col-9 fondoDashboard'>
                <Dashboard token={token} tarea={tarea}></Dashboard>
              </div>
            </div>
          </UserContext.Provider>
        </div>
      </TokenContext.Provider> 
    </>
  )
}

export default App
