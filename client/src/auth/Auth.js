import React, { useEffect, useState, createContext } from "react";
import { LoginScreen } from "../pages";
export const Auth = createContext();
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const a = localStorage.getItem('userInfo')
        setUser(a);
        setLoading(true);
    }, [user]);
    return (
        <Auth.Provider value={{ user }}>
            {user && children}
            {/* {loading && !user && <>Loading...</>} */}
            {!user && <LoginScreen />}
        </Auth.Provider>
    )
}