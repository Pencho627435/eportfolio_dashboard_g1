import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cabecera from './componentes/Cabecera/Cabecera'
import Dashboard from './componentes/Dashboard/Dashboard'
import Roles from './componentes/Roles/Roles'



function App() {

  let usuario = "usuario1"
  let token = "abcd.efgh.ijkl.mnop"
  let menu = "menú1"


  return (
    <>
      <div className='container-fuid'>
        <div className='row'>
          <div className='col-12 fondoCabecera'>
            <Cabecera usuario = {usuario}></Cabecera>
          </div>
        </div>
        <div className='row'>
          <div className='col-3 fondoRoles'>
            <Roles menu =  {menu}></Roles>
          </div>
          <div className='col-9 fondoDashboard'>
            <Dashboard token = {token}></Dashboard>
          </div>

        </div>
      </div>


    </>
  )
}

export default App
