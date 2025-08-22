"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { User } from "@/lib/types";
import { API, SuccessResponse } from "@/lib/api";

type UserWithoutPassword = Omit<User, "password">;

type AuthContextType = {
    user: UserWithoutPassword | null;
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string, name: string) => Promise<void>;
    logout: () => Promise<void>;
    getUser: () => Promise<void>;
    isLoading: boolean;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<UserWithoutPassword | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                if (API.isAuthenticated()) {
                    const user = await API.getUser();
                    setUser(user);
                }
            } catch (error) {
                console.error("Error checking auth:", error);
            } finally {
                setIsLoading(false);
            }
        }

        checkAuth();
    }, []);

    const login = async (email: string, password: string) => {
        const session: SuccessResponse = await API.login(email, password);
        setUser(session.user);
    }
    
    const register = async (email: string, password: string, name: string) => {
        const session: SuccessResponse = await API.register(email, password, name);
        setUser(session.user);
    }
    
    const logout = async () => {
        await API.logout();
        setUser(null);
    }
    
    const getUser = async () => {
        const user = await API.getUser();
        setUser(user);
    }
    
    return (
        <AuthContext.Provider
          value={{
            user,
            login,
            register,
            logout,
            getUser,
            isLoading,
            isAuthenticated: !!user,
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }

    return context;
}