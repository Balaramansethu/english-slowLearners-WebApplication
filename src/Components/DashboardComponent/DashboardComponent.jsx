import React, { useState } from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ModuleOneComponent from '../Routes/ModuleOneComponent/ModuleOneComponent';
import ModuleTwoComponent from '../Routes/ModuleTwoComponent/ModuleTwoComponent';
import ModuleThreeComponent from '../Routes/ModuleThreeComponent/ModuleThreeComponent';
import Leaderboard from '../LeaderboardComponent/LeaderboardComponent';
import './DashboardComponent.css';
import IntermediateComponent from '../Routes/ModuleTwoComponent/IntermediateComponent';
import ActivityComponent from '../Routes/ModuleThreeComponent/ActivityComponent';

const DashboardComponent = () => {
  const [moduleOneProgress, setModuleOneProgress] = useState(0);
  const [moduleTwoProgress, setModuleTwoProgress] = useState(0);
  const [moduleThreeProgress, setModuleThreeProgress] = useState(0);

  return (
    <Router>
      <div className='dashboard router'>
        <div className='module-content'>
          <h3 className='dashboard-heading'>Dashboard</h3>
          <ul>
            <li>
              <Link to='/'>ModuleOne (BASIC)</Link>
            </li>
            <li>
              <Link to='/module-two'>ModuleTwo (INTERMEDIATE)</Link>
            </li>
            <li>
              <Link to='/module3'>ModuleThree (ADVANCE)</Link>
            </li>
          </ul>

          <div className='leaderboard'>
            <h3 className='heading-leaderboard'>Leaderboard</h3>
            <Leaderboard
              moduleOneProgress={moduleOneProgress}
              moduleTwoProgress={moduleTwoProgress}
              moduleThreeProgress={moduleThreeProgress}
            />
          </div>
        </div>

        <Routes>
          <Route
            exact
            path='/'
            element={<ModuleOneComponent setProgress={setModuleOneProgress} />}
          ></Route>
          {/* Route for ModuleTwoComponent */}
          <Route
            exact
            path='/module-two'
            element={<ModuleTwoComponent setProgress={setModuleTwoProgress} />}
          ></Route>
          <Route
            exact
            path='/module3'
            element={<ModuleThreeComponent setProgress={setModuleThreeProgress} />}
          ></Route>
          <Route
          exact 
          path='/IntermediateLevel'
          element={<IntermediateComponent/>}
          ></Route>
          <Route 
          exact
          path='/ActivityLevel'
          element={<ActivityComponent/>}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default DashboardComponent;
