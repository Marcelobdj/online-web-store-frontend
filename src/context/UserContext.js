import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const loggedInUser = JSON.parse(localStorage.getItem("user"));
        if (loggedInUser) {
            setUser(loggedInUser);
        }
    }, []);

    const login = async (email, password) => {
        try {
            const response = await axios.post("/api/users/login", { email, password });
            setUser(response.data);
            localStorage.setItem("user", JSON.stringify(response.data));
        } catch (error) {
            console.error("Error logging in:", error);
            throw error;
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    const updateProfile = async (name, password) => {
        try {
            const response = await axios.put(
                "/api/users/update-profile",
                { name, password },
                { headers: { "x-auth-token": user.token } }
            );
            setUser({ ...user, name: response.data.name });
            localStorage.setItem("user", JSON.stringify({ ...user, name: response.data.name }));
        } catch (error) {
            console.error("Error updating profile:", error);
            throw error;
        }
    };

    return (
        <UserContext.Provider value={{ user, login, logout, updateProfile }}>
            {children}
        </UserContext.Provider>
    );
};