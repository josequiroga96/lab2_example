"use client"

import { useAuth } from "@/components/auth-context";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner"
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Login() {
    const { login } = useAuth();
    const router = useRouter();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setEmail("");
        setPassword("");

        try {
            await login(email, password);
            router.push("/dashboard");
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
            toast.error("Error al iniciar sesión: " + error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-6">
            {/* Logo + Title */}
            <Link href="/" className="flex items-center space-x-4">
                <Image src="/Bank tech big.png" alt="logo" width={50} height={50} />
                <p className="text-2xl font-bold font-sans">Bank Tech</p>
            </Link>
            {/* Main heading */}
            <p className="text-4xl font-bold font-sans">Iniciar Sesion</p>
            {/* Subheading */}
            <div className="text-gray-500"> Accede a tu cuenta bancaria </div>

            {/* Login Form */}

            <div className="w-120 bg-white-100 rounded-2xl shadow-[0_0_20px_5px_rgba(128,128,128,0.2)] flex flex-col items-center p-6 space-y-4">
                <h2 className="text-lg font-semibold"> Ingresa tus datos </h2>

                <form onSubmit={handleLogin}>
                    <div className="w-full flex flex-col space-y-2">
                        <label className="text-sm font-medium"> Email </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="tu@email.com"
                            className="border rounded-xl px-4 py-2 w-full"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="w-full flex flex-col space-y-2">
                        <label className="text-sm font-medium"> Contraseña </label>
                        <input
                            id="password"
                            type="password"
                            placeholder = "Tu Contraseña"
                            className="border rounded-xl px-4 py-2 w-full"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {/* Links */}
                    <div className="flex justify-between w-full text-sm text-gray-500">
                        <Link href="/register">
                            <p className="text-black"> No tenes cuenta? </p>
                        </Link>
                        <p> Olvidaste tu contraseña?</p>
                    </div>

                    {/* Login Button */}
                    <Button type="submit" className="w-full rounded-xl" disabled={isLoading}>
                        {isLoading ? "Cargando..." : "Iniciar Sesión"}
                    </Button>
                </form>

                <div className="w-full bg-white-100 rounded-2xl shadow-[0_0_20px_5px_rgba(128,128,128,0.2)] flex flex-col items-center p-6 space-y-4">
                    <div className="w-full text-sm font-medium ">
                        <p className="text-gray-500 mb-2"> Credenciales de demo: </p>
                        <p> Email: demo@bank.com</p>
                        <p> Contraseña: demo123 </p>
                    </div>
                </div>
            </div>
        </div>
    )
}