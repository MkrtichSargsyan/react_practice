import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { dialogsReducer } from './dialogsReducer';
import { profileReducer } from './profileReducer';
import { sidebarReducer } from './sidebarReducer';
import { usersReducer } from './usersReducer';

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage:usersReducer
});

const store = configureStore({ reducer: reducers });

export default store;
