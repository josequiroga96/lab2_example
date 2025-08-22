"use client";

import { useAuth } from "@/components/auth-context";
import { Button } from "@/components/ui/button";
import { ProtectedRoute } from "@/components/ProtectedRoute";

export default function Dashboard() {
    const { user, logout } = useAuth();

    if (!user) {
        return (
            <ProtectedRoute>
                <div>No hay usuario</div>
            </ProtectedRoute>
        );
    }
    
    return (
        <ProtectedRoute>
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-4xl font-bold">Dashboard</h1>
                <p className="text-lg text-gray-500">Bienvenido, {user.name}</p>
                <Button className="mt-8" onClick={logout}>Cerrar Sesión</Button>
            </div>
        </ProtectedRoute>
    );
}