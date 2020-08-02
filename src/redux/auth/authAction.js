import { createAction } from '@reduxjs/toolkit';

const registeRequest = createAction('./auth/registerRequest');
const registeSuccess = createAction('./auth/registerSuccess');
const registeError = createAction('./auth/registerError');

const loginRequest = createAction('./auth/loginRequest');
const loginSuccess = createAction('./auth/loginSuccess');
const loginError = createAction('./auth/loginError');

const logoutRequest = createAction('./auth/logoutRequest');
const logoutSuccess = createAction('./auth/logoutSuccess');
const logoutError = createAction('./auth/logoutError');

const getCurrentUserRequest = createAction('./auth/getCurrentUserRequest');
const getCurrentUserSuccess = createAction('./auth/getCurrentUserSuccess');
const getCurrentUserError = createAction('./auth/getCurrentUserError');

export default {
    registeRequest,
    registeSuccess,
    registeError,
    loginRequest,
    loginSuccess,
    loginError,
    logoutRequest,
    logoutSuccess,
    logoutError,
    getCurrentUserRequest,
    getCurrentUserSuccess,
    getCurrentUserError,
}
