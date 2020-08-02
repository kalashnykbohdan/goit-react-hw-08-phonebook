import React from 'react';
import style from'./contactList.module.css';
import {connect} from 'react-redux';
import contactOperations from '../../redux/contacts/contactOperations';
import contactSelectors from '../../redux/contacts/cnotactsSelectors';

const ContactList = ({contacts, onRemoveContact}) =>(
  <ul>
    {contacts.map(({id, name, number}) => 
    
      <li key={name}>
        <span>{name} : {number}</span>
        <button type="button" className={style.BthDelete} onClick={() => onRemoveContact(id)}>Delete</button>
      </li>
    )}
  </ul>
);

const mapStateToProps = (state) => ({
  contacts: contactSelectors.getVisibleContacts(state)
});

const mapDispatchToProps = ({
  onRemoveContact: contactOperations.removeContact
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);