import { createContext, useEffect, useState } from "react";

type AuthContextType = {
    user: any;
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string, name: string) => Promise<void>;
    logout: () => Promise<void>;
    getUser: () => Promise<void>;
    isLoading: boolean;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        console.log("I'm in the useEffect");
    }, []);

    useEffect(() => {
        console.log("The useEffect is running");
    }, [isLoading]);
}