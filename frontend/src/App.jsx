import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import HomePage from './Pages/HomePage';
import NoPage from './Pages/NoPage';


function App() { 
  return (
    <div>
      <Toaster />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/not-found" element={<NoPage />} />
  
      </Routes>
    </div>
  );
}

export default App


