import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { dialogsReducer } from './dialogsReducer';
import { profileReducer } from './profileReducer';
import { sidebarReducer } from './sidebarReducer';

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
});

const store = configureStore({ reducer: reducers });

export default store;
