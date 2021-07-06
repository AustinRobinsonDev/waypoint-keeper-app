import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './/components/layout/Navbar';
import Alerts from './/components/layout/Alerts';
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Home from './components/pages/Home';
import About from './components/pages/About';
import WaypointState from './context/waypoint/WaypointState';
import AlertState from './context/alert/AlertState'
import AuthState from './context/auth/AuthState';
const App = () => {
  return (
    <AuthState>
      <WaypointState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <div className="container">
              <Alerts />
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </WaypointState>
    </AuthState>
  );
}

export default App;
