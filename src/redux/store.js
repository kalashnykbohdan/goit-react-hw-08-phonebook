import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import contactReducer from './contacts/contactReducer';
import authReducer from './auth/authReducer';

// const defaultMiddleware = getDefaultMiddleware();

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token']
};

export const store = configureStore({
    reducer: {
        contacts: contactReducer,
        auth: persistReducer(authPersistConfig, authReducer)
    },
  });

  export const persistor = persistStore(store);

  // export const store = configureStore({
  //   reducer: {
  //       contacts: contactReducer,
  //       auth: persistReducer(authPersistConfig, authReducer)
  //   },
  // });

  // export const persistor = persistStore(store);
