import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import state, { addPost } from './redux/state';

export let rerenderEntireTree = (state) => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App appState={state} addPost={addPost} />
    </React.StrictMode>
  );
};
