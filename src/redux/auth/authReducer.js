import {combineReducers} from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authAction from './authAction';

const initialUserState = {name: null, email: null};

    // const AddContact = (state, action) => [...state, action.payload];
    // const removeContact = (state, action) => state.filter(contact => contact.id !== action.payload);
    
const user = createReducer(initialUserState,{
    [authAction.registeSuccess]: (_, {payload}) => payload.user,
    [authAction.loginSuccess]: (_, {payload}) => payload.user,
    [authAction.getCurrentUserSuccess]: (_, {payload}) => payload,
    [authAction.logoutSuccess]: () => initialUserState,
});

const token = createReducer(null,{
    [authAction.registeSuccess]: (_, {payload}) => payload.token,
    [authAction.loginSuccess]: (_, {payload}) => payload.token,
    [authAction.logoutSuccess]: () => null,
});

const error = createReducer(null,{
    [authAction.registeSuccess]: (_, {payload}) => payload,
    [authAction.loginSuccess]: (_, {payload}) => payload,
    [authAction.getCurrentUserSuccess]: (_, {payload}) => payload,
    [authAction.logoutSuccess]: (_, {payload}) => payload,
});

export default combineReducers({
    user,
    token,
    error,
});

