import { createAction } from '@reduxjs/toolkit';

const addContactRequest = createAction('./contacts/addRequest');
const addContactSuccess = createAction('./contacts/addSuccess');
const addContactError = createAction('./contacts/addError');

const axiosContactsRequest = createAction('./contacts/axiosRequest');
const axiosContactsSuccess = createAction('./contacts/axiosSuccess');
const axiosContactsError = createAction('./contacts/axiosError');

const removeContactRequest = createAction('./contacts/removeRequest');
const removeContactSuccess = createAction('./contacts/removeSuccess');
const removeContactError = createAction('./contacts/removeError');

const filterContact = createAction('FILTER_CONTACT');


export default {
    addContactRequest,
    addContactSuccess,
    addContactError,
    axiosContactsRequest,
    axiosContactsSuccess,
    axiosContactsError,
    removeContactRequest,
    removeContactSuccess,
    removeContactError, 
    filterContact}
