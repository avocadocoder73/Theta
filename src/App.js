import logo from './logo.svg';
import './App.css';
import AppBar from '@mui/material/AppBar';
import { Typography, Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';

import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Options from './components/Options';
import Stocks from './components/Stocks';
import CompanyProfile from './components/CompanyProfile';

function App() {
  return (
   <Routes>
    <Route path='/' element={<Dashboard></Dashboard>}></Route>
    <Route path='/dashboard' element={<Dashboard prop={<Home></Home>}></Dashboard>}></Route>
    <Route path='/options' element={<Dashboard prop={<Options></Options>}></Dashboard>}></Route>
     <Route path='/stocks' element={<Dashboard prop={<Stocks></Stocks>}></Dashboard>}></Route>
     <Route path="/companyprofile/:ticker" element={<Dashboard prop={<CompanyProfile></CompanyProfile>}></Dashboard>}></Route>
   </Routes>
  );
}

export default App;
