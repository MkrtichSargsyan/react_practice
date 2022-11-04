import './App.css';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Header from './Header';

function App() {
  return (
    <div className="app_wrapper">
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;
