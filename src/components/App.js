import {Switch, Route} from 'react-router-dom'
import React, {Component} from 'react';
import Section from './Sections';

import Home from '../views/HomePage';
import Register from '../views/Register';
import Login from '../views/Login';
import Contacts from '../views/Contacts';
import NotFound from '../views/NotFound';

import { Toast } from "toaster-js"
import "toaster-js/default.css";
import routes from '../routes'
 import authOperations from '../redux/auth/authOperations';
 import { connect } from 'react-redux';

class App extends Component {

  componentDidMount(){

    this.props.onGetCurrentUser();
   ;
  }

  render(){
    return (
      <Section>
          <Switch>
            <Route path={routes.home} exact component={Home}/>
            <Route path={routes.register} component={Register}/>
            <Route path={routes.login} component={Login}/>
            <Route path={routes.contacts} component={Contacts}/>
            
            <Route component={NotFound}/>
          </Switch>
      </Section>

    )
  }

}

export default connect(null, {
  onGetCurrentUser: authOperations.getCurrentUser,
})(App);


