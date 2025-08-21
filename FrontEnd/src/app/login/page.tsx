"use client"

import Navbar from "../../components/Navbar";
import Image from "next/image";

export default function Login() {
    return (
            <div className="absolute top-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-6">
                {/* Logo + Title */}
                <div className="flex items-center space-x-4">
                    <Image src="/Bank tech big.png" alt="logo" width={50} height={50} />
                    <p className="text-2xl font-bold font-sans">Bank Tech</p>
                </div>
                {/* Main heading */}
                <p className="text-4xl font-bold font-sans">Iniciar Sesion</p>
                {/* Subheading */}
                <div className="text-gray-500"> Accede a tu cuenta bancaria </div>

                {/* Login Form */}

                <div className="w-120 bg-white-100 rounded-2xl shadow-[0_0_20px_5px_rgba(128,128,128,0.2)] flex flex-col items-center p-6 space-y-4">
                    <h2 className="text-lg font-semibold"> Ingresa tus datos </h2>

                    <div className="w-full flex flex-col space-y-2">
                        <label className="text-sm font-medium"> Email </label>
                        <input
                            type="email"
                            placeholder="tu@email.com"
                            className="border rounded-full px-4 py-2 w-full"
                        />
                    </div>

                    <div className="w-full flex flex-col space-y-2">
                        <label className="text-sm font-medium"> Contraseña </label>
                        <input
                            type="password"
                            placeholder = "Tu Contraseña"
                            className="border rounded-full px-4 py-2 w-full"
                        />
                    </div>

                    {/* Links */}
                    <div className="flex justify-between w-full text-sm text-gray-500">
                        <p className="text-black"> No tenes cuenta? </p>
                        <p> Olvidaste tu contraseña?</p>
                    </div>

                    {/* Login Button */}

                    <button className="bg-black text-white px-6 py-2 w-full rounded-full hover:bg-gray-800">
                        Iniciar Sesion
                    </button>
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