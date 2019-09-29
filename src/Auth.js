import React, { useEffect, userState } from 'react';
import app from "./base.js";

export const AuthContext = React.createContext();


export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = userState(null);

    useEffect(() => {
        app.auth().onAuthStateChanged(setCurrentUser);
    }, []);

    return (
        <AuthContext.Provider
            value={{
                currentUser
            }}
        >
        {children}
        </AuthContext.Provider>
    );
};