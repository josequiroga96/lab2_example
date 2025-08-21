"use client"

import Navbar from "@/components/navbar";

import Button from "@/components/ui/button";
import Image from "next/image";
import { Card, CardHeader, CardContent, cardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
/*
wololo
*/
export default function Login() {
  return (
    <>
    <div className = "flex flex-row items-center justify-center h-[20vh] p-6">
        <Image src="/Bank_tech_big.png" alt="logo" width={150} height={150} />
        <div> Bank Tech </div>
        </div>
        <div className = "flex flex-col items-center justify-start h-[10vh] p-6">
            <h2 className = "text-2xl font-bold gray-500">Inicia Sesión</h2>
            <a className="text-lg font-semibold mb-1">ingrese a su cuenta bancaria</a>
        </div>
    <div  className ="flex flex-col items-center justify-star h-[10vh] p-6">
        <Card className = "w-full max-w-md sadow-lg rounded-2x1">
            <CardHeader>
            <cardTitle className="text-center font-semibold ">Ingrese los datos</cardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-500">
                <div>
                    <h1 className="text-lg font-bold mb-1">Correo electrónico</h1>
                    <Input id="email" placeholder="tu@email.com" type="email" />
                </div>
                <div>
                    <h1 className="text-lg font-semibold mb-1">Contraseña</h1>
                    <Input id="contraseña" placeholder="Contraseña" type="String" />
                </div>
            </CardContent>

            <div className= "flex flex-row items-center justify-center mb-4">
              <hiperlink onClick={"/login"} className="text-center text-gray-500 hover:underline mb-6">
                    ¿No tienes una cuenta? Regístrate
                </hiperlink>
                <hiperlink onClick={"/login"} className="text-center text-gray-500 hover:underline mb-6">
                    ¿Olvidaste tu contraseña?
                </hiperlink>
            </div>
            <div className = "flex flex-row item-center justify-center space-x-8 mb-4">
                <button className = "w-full" >Inicio de sesion </button>
            </div>
        </Card>
    </div>
    </>
  )
}
