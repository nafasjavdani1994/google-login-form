import React from 'react';

import SignUp from './components/SignUp';
import Login from './components/Login';
import { Routes, Route, Navigate } from 'react-router-dom';

// import './App.css';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Navigate to='/signup' />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
