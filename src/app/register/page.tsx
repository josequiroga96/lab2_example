"use client"

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
            <p className="text-4xl font-bold font-sans">Crear cuenta</p>
            {/* Subheading */}
            <div className="text-gray-500"> Unite a la nueva era bancaria </div>

            {/* Login Form */}

            <div className="w-120 bg-white-100 rounded-2xl shadow-[0_0_20px_5px_rgba(128,128,128,0.2)] flex flex-col items-center p-6 space-y-4">
                <h2 className="text-lg font-semibold"> Completa tus datos </h2>
                {/* name */}
                <div className="w-full flex flex-col space-y-2">
                    <label className="text-sm font-medium"> Nombre completo </label>
                    <input
                        type="name"
                        placeholder="Tu nombre completo "
                        className="border rounded-full px-4 py-2 w-full"
                    />
                </div>

                {/* email */}
                <div className="w-full flex flex-col space-y-2">
                    <label className="text-sm font-medium"> Email </label>
                    <input
                        type="email"
                        placeholder="tu@email.com "
                        className="border rounded-full px-4 py-2 w-full"
                    />
                </div>

                {/* password */}
                <div className="w-full flex flex-col space-y-2">
                    <label className="text-sm font-medium"> Contraseña </label>
                    <input
                        type="password"
                        placeholder = "Minimo 6 caracteres"
                        className="border rounded-full px-4 py-2 w-full"
                    />
                </div>

                {/* confirm password */}
                <div className="w-full flex flex-col space-y-2">
                    <label className="text-sm font-medium"> Confirmar Contreseña </label>
                    <input
                        type="password"
                        placeholder="Repeti tu contreseña"
                        className="border rounded-full px-4 py-2 w-full"
                    />
                </div>

                {/* Links */}
                <div className="flex items-center flex-col w-full text-sm text-gray-500">
                    <p className="text-black"> Ya tenes cuenta? Inicia sesion </p>
                </div>

                {/* Login Button */}

                <button className="bg-black text-white px-6 py-2 w-full rounded-full hover:bg-gray-800">
                    Crear cuenta
                </button>
            </div>
        </div>
    )
}