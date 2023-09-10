import logo from './logo.svg';
import './App.css';
import AppBar from '@mui/material/AppBar';
import { Typography, Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';

import Dashboard from './components/Dashboard';

function App() {
  return (
   <Routes>
    <Route path='/' element={<Dashboard></Dashboard>}></Route>
    <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>

   </Routes>
  );
}

export default App;
