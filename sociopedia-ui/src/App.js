import LoginPage from './page/LoginPage';
import MessengerPage from './page/MessengerPage';
import SignupPage from './page/SignupPage';
import DashboardPage from './page/DashboardPage';
import LandingPage from './page/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './page/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/messenger' element={<MessengerPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
