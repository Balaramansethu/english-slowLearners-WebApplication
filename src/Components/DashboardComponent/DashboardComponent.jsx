import React from 'react'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import ModuleOneComponent from '../Routes/ModuleOneComponent/ModuleOneComponent'
import ModuleTwoComponent from '../Routes/ModuleTwoComponent/ModuleTwoComponent'
import ModuleThreeComponent from '../Routes/ModuleThreeComponent/ModuleThreeComponent'
import './DashboardComponent.css'
const DashboardComponent = () => {
  return (
    <Router>
        <div className='dashboard router'>
        <div className='module-content'>
            <ul>
                <li>
                    <Link to='/'>ModuleOne (BASIC)</Link>
                </li>
                <li>
                    <Link to='/module2'>ModuleTwo (INTERMEDIATE)</Link>
                </li>
                <li>
                    <Link to='/module3'>ModuleThree (ADVANCE)</Link>
                </li>
            </ul>
        </div>
        <Routes >
            <Route exact path='/' element={<ModuleOneComponent/>}></Route>
            <Route exact path='/module2' element={<ModuleTwoComponent/>}></Route>
            <Route exact path='/module3' element={<ModuleThreeComponent/>}></Route>
        </Routes>
        </div>
        
    </Router>
  )
}

export default DashboardComponent