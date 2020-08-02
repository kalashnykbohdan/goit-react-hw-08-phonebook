import React, { Component } from 'react';
import {connect} from 'react-redux';
import ContactList from '../components/ContactList';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter'

import { Toast } from "toaster-js"
import "toaster-js/default.css";
import contactOperations from '../redux/contacts/contactOperations';
import contactsSelector from '../redux/contacts/cnotactsSelectors';
import authOperations from '../redux/auth/authOperations';
import authSelectors from '../redux/auth/authSelectors';

class HomePage extends Component {

  // componentDidMount(){
  //   if(!this.props.isAuthenticated){
  //     this.props.history.replace('/login');
  //     return;
  //   }

    componentDidMount(){
      // if(!this.props.isAuthenticated){
      //   this.props.history.replace('/login');
      //   return;
      // }
        this.props.onAxiosContacts();
      }

    render() {

        return (
            <div>
                <h2>Contacts</h2>

                <ContactForm/>
                {this.props.isLoadingTasks && <h1>LOADING STUFF...</h1>}
                <h2>Contacts</h2>
                <Filter/>
                <ContactList/>

            </div>
        )
    }

}

const mapStateToProps = state => ({
    isLoadingTasks: contactsSelector.getLoading(state),
    isAuthneticated: authSelectors.isAuthenticated(state)
  })
  
  const mapDispatchToProps = {
    onAxiosContacts: contactOperations.axiosContacts,
  }
  
  
  export default  connect(mapStateToProps, mapDispatchToProps)(HomePage);