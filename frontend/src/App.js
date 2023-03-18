
import './App.css';
import ComporStrtup from './components/ComporStrtup';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Spdform from './components/Spdform';
import Startupform from './components/Startupform';
import Companyform from './components/Companyform';
import Home from './components/Home';
import ProfileCollege from './components/ProfileCollege';
import ProfileStartup from './components/ProfileStartup';
import Profilecompany from './components/Profilecompany';
import Profilespd from './components/Profilespd';

// import Otpinput from './Otpinput';
function App(){
  return ( 
    <div  className='App'>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='comporstrtup' element={<ComporStrtup />} />
        <Route path='spdform' element={<Spdform />} />
        <Route path='companyform' element={<Companyform />} />
        <Route exact path='startupform' element={<Startupform />} />
        <Route exact path='home' element={<Home />} />
        <Route path='profile-spd' element={<Profilespd />} />
        <Route path='profile-company' element={<Profilecompany />} />
        <Route path='profile-college' element={<ProfileCollege />} />
        <Route path='profile-startup' element={<ProfileStartup />} />
     
      </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;