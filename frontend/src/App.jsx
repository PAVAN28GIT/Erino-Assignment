import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'


import RootLayout from "./layout/RootLayout";
import HomePage from "./Pages/Home/HomePage";
import ContactInputPage from "./Pages/newContact/ContactInputPage";
import ContactsPage from "./Pages/contacts/ContactsPage";


function App() { 
  return (
    <div>
      <Toaster />
      <Routes>

        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="new" element={<ContactInputPage />} />
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App
