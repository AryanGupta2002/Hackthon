import './App.css';
import ComporStrtup from './components/ComporStrtup';
import Login from './components/Login';
import StudProfDev from './components/StudProfDev';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Spdform from './components/Spdform';
import Startupform from './components/Startupform';
import Companyform from './components/Companyform';
// import Otpinput from './Otpinput';
function App() {
  return (
    
    <div  className='App'>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='comporstrtup' element={<ComporStrtup />} />
        <Route path='StudProfDev' element={<StudProfDev />} />
        <Route path='spdform' element={<Spdform />} />
        <Route path='companyform' element={<Companyform />} />
        <Route exact path='startupform' element={<Startupform />} />
      </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;