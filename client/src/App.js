import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeScreen, LoginScreen, UserProfile } from "./pages"
import { UserContext } from "./context";

function App() {
  return (
    <BrowserRouter>
    <UserContext.Provider >
      <Routes>
        <Route path='/' element={<HomeScreen />}/>
        <Route path='/login' element={<LoginScreen />}/>
        <Route path='/:userName' element={<UserProfile />}/>
      </Routes>
    </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
