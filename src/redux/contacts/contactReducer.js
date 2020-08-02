import {combineReducers} from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contactAction from './contactAction';

    const AddContact = (state, action) => [...state, action.payload];
    const removeContact = (state, action) => state.filter(contact => contact.id !== action.payload);
    
const items = createReducer([],{
    [contactAction.axiosContactsSuccess]: (state, action) => action.payload,
    [contactAction.addContactSuccess]: AddContact,
    [contactAction.removeContactSuccess]: removeContact,
});


const filter = createReducer('',{
    [contactAction.filterContact]: (state, action) => action.payload,

})

const loading = createReducer(false, {
    [contactAction.axiosContactsRequest]: () => true,
    [contactAction.axiosContactsSuccess]: () => false,
    [contactAction.axiosContactsError]: () => false,

    [contactAction.addContactRequest]: () => true,
    [contactAction.addContactSuccess]: () => false,
    [contactAction.addContactError]: () => false,
    
    [contactAction.removeContactRequest]: () => true,
    [contactAction.removeContactSuccess]: () => false,
    [contactAction.removeContactError]: () => false,
});

export default combineReducers({
    items,
    filter,
    loading,
});

