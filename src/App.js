import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="app_wrapper">
        <Header />
        <Navbar />
        <div className="app_wrapper_content">
          <Routes>
            <Route path="dialogs" element={<DialogsContainer />} />
            <Route path="profile" element={<Profile />} />
            <Route path="users" element={<div>users</div>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
