import authAction from './authAction';
import axios from 'axios';
import { persistor } from '../store';

const token = {
    set(token){
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset(){
        axios.defaults.headers.common.Authorization = '';
    },
};

const register = credentials => dispatch => {
    dispatch(authAction.registeRequest());
    console.log(credentials);
    axios
    .post('https://goit-phonebook-api.herokuapp.com/users/signup', credentials)
    .then(response => {
        token.set(response.data.token);
        dispatch(authAction.registeSuccess(response.data))
    })
    .catch(error => dispatch(authAction.registeError(error)));
};

const logIn = credentials => dispatch => {
    dispatch(authAction.loginRequest());
    console.log(credentials);
    axios
    .post('https://goit-phonebook-api.herokuapp.com/users/login', credentials)
    .then(response => {
        token.set(response.data.token);
        dispatch(authAction.loginSuccess(response.data))
    })
    .catch(error => dispatch(authAction.loginError(error)));
};

const getCurrentUser = () => (dispatch, getState) =>{
    const{ 
        auth:{ token: persistedToken }
    } = getState();

    if(!persistedToken){
        return;
    }

    token.set(persistedToken);
    dispatch(authAction.getCurrentUserRequest());

    axios
    .get('https://goit-phonebook-api.herokuapp.com/users​/current')
    .then(({data}) => {
        console.log(data)
        dispatch(authAction.getCurrentUserSuccess(data))
    })
    .catch(error => authAction.getCurrentUserError(error));
};

const logOut = () => dispatch => {
    dispatch(authAction.logoutRequest());
    axios
    .post('https://goit-phonebook-api.herokuapp.com/users/logout')
    .then(() => {
        token.unset();
        dispatch(authAction.logoutSuccess())
    })
    .catch(error => dispatch(authAction.logoutError(error)));
};;

export default {register, logIn, getCurrentUser, logOut}