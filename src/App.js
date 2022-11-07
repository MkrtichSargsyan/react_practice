import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile/Profile';

function App({ appState,addPost }) {
  const { dialogsPage, profilePage } = appState;
  const { dialogs, messages } = dialogsPage;
  const { posts } = profilePage;
  return (
    <BrowserRouter>
      <div className="app_wrapper">
        <Header />
        <Navbar />
        <div className="app_wrapper_content">
          <Routes>
            <Route path="profile" element={<Profile posts={posts} addPost={addPost}/>} />
            <Route
              path="dialogs"
              element={<Dialogs dialogs={dialogs} messages={messages} />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
