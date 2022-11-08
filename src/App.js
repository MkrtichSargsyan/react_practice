import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile/Profile';

function App({ appState, dispatch }) {
  const { dialogsPage, profilePage } = appState;
  const { dialogs, messages, newMessageBody } = dialogsPage;
  const { posts, newPostText } = profilePage;
  return (
    <BrowserRouter>
      <div className="app_wrapper">
        <Header />
        <Navbar />
        <div className="app_wrapper_content">
          <Routes>
            <Route
              path="profile"
              element={
                <Profile
                  posts={posts}
                  dispatch={dispatch}
                  newPostText={newPostText}
                />
              }
            />
            <Route
              path="dialogs"
              element={
                <Dialogs
                  newMessageBody={newMessageBody}
                  dispatch={dispatch}
                  dialogs={dialogs}
                  messages={messages}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
