
import { useState, useEffect } from 'react';
import AuthContext from '../lib/AuthContext'

export const AuthProvider = ({ children }) => {
 const [user, setUser] = useState(null);
 useEffect(() =>{
    user = JSON.parse(localStorage.getItem("pocketbase_auth"))
    if (user) {
    setUser(user.token)
    }
 }, []);
 
 return (
 <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
 );
 };