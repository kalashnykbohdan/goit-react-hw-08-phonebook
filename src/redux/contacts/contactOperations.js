import contactAction from './contactAction';
import axios from 'axios';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const addContact = ({name, number}) => dispatch =>{ dispatch(contactAction.addContactRequest());
    console.log(name, number);

    axios
    .post('/contacts', {name, number})
    .then(response => {dispatch(contactAction.addContactSuccess(response.data));})
    .catch(error => dispatch(contactAction.addContactError(error)));
};

const axiosContacts = () => dispatch => {
    dispatch(contactAction.axiosContactsRequest());

    axios
    .get('/contacts')
    .then(({data}) => dispatch(contactAction.axiosContactsSuccess(data)))
    .catch(error => dispatch(contactAction.axiosContactsError(error)));
};

const removeContact = id => dispatch => {
    dispatch(contactAction.removeContactRequest());
    
    axios.delete(`/contacts/${id}`)
    .then(() => dispatch(contactAction.removeContactSuccess(id)))
    .catch(error => dispatch(contactAction.removeContactError(error)));
}

export default {
    addContact,
    axiosContacts,
    removeContact,
}