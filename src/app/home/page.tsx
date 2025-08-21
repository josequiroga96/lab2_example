"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {useRouter} from "next/navigation";

export default function Home(){
    const router = useRouter();
    function handleLogin() {
        router.push("/login");
    }
    function handleRegister() {
        router.push("/register");
    }
//     function mainHome(){
//         return(
//         <div className = "flex flex-col items-center justify-start h-[60vh] p-6">
//           <Image src="/Bank_tech_big.png" alt="logo" width={150} height={150} />
//           <h1 className = "text-4xl font-bold mt-2">
//            Tu dinero tu control
//            </h1>
//         </div>
//         ){mainHome()}
//     }
    return (
        <>

        <div className = "flex flex-col items-center justify-start h-[60vh] p-6">
         <Image src="/Bank_tech_big.png" alt="logo" width={150} height={150} />
         <h1 className = "text-4xl font-bold mt-2">
         Tu dinero tu control
         </h1>
        </div>
        <div className = "flex flex-row item-center justify-center space-x-8">
            <Button onClick = {handleLogin} variant = "default" className="mb-2">Inicio de sesion </Button>

            <Button onClick = {handleRegister} variant = "default" className="mb-2">Registro</Button>
        </div>
        <div className = "flex flex-col items-center justify-center mt-4">
            <h2 className = "text-1xl font-bold">problemas de acceso</h2>
        </div>
        </>
    )
    }