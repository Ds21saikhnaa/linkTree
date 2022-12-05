import React, { useContext } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeScreen, LoginScreen, UserProfile } from "./pages"
import { UserContext } from "./context";
import { AuthProvider } from './auth/Auth';

function App() {
  return (
    <AuthProvider>
      <UserContext.Provider >
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/:userName' element={<UserProfile />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </AuthProvider>
  );
}

export default App;
