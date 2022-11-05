import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import classes from './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <div className="app_wrapper">
        <Header />
        <Navbar />
        <div className={classes.app_wrapper_content}>
          <Routes>
            <Route path="profile" element={<Profile />} />
            <Route path="dialogs" element={<Dialogs />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
