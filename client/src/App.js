import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeScreen, LoginScreen, UserProfile } from "./pages"
import { UserContext } from "./context";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeScreen />}/>
        <Route path='/login' element={<LoginScreen />}/>
        <Route path='/:userName' element={<UserProfile />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
