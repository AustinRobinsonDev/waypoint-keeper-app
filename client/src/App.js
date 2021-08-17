import React, { Fragment, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './/components/layout/Navbar';
import Alerts from './/components/layout/Alerts';
import Register from './components/auth/Register'
import Login from './components/auth/Login';
import PrivateRoute from './components/routing/PrivateRoute';
import Home from './components/pages/Home';
import About from './components/pages/About';
import WaypointState from './context/waypoint/WaypointState';
import AlertState from './context/alert/AlertState'
import AuthState from './context/auth/AuthState';
import setAuthToken from './utils/setAuthToken';
import Modal from "react-modal";


if (localStorage.token){
  setAuthToken(localStorage.token)
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

const App = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(true);
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }
  function closeModal() {
    setIsOpen(false);
  }
  function handleRequestClose(){
    return null;
  }
  return (
    
    <AuthState>
      <WaypointState>
        <AlertState>
          <Router>
            <Fragment>
            
              <Navbar />
              <div className="container">
              <Alerts />
              <Modal
              onRequestClose={handleRequestClose}
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Site Currently Under Maintenance.</h2>
      </Modal>
                <Switch>
                  <PrivateRoute exact path='/' component={Home} />
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
