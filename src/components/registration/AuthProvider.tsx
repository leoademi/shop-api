import React, {createContext, ReactNode, useContext, useState} from 'react';

interface AuthContextValue {
    isLoggedIn: boolean;
    login: (email: string, password: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = async (email: string, password: string) => {
        try {

            const response = await fetch("http://localhost:8000/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                // Authentication was successful
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
                console.error("Login failed");
            }
        } catch (error) {
            // Handle any errors, e.g., network issues
            console.error("An error occurred:", error);
        }
    };

    const logout = () => {
        localStorage.removeItem('authToken');
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}