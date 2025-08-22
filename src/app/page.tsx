"use client"

import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  function handleLogin() {
    router.push("/login");
  }

  function handleRegister() {
    router.push("/register");
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-25">
        <Image src="/Bank tech big.png" alt="logo" width={200} height={200} />
        <h1 className=" mb-5 text-6xl font-bold bg-gradient-to-r from-primary to-primary/60 text-transparent bg-clip-text">Tu dinero, tu control</h1>
        <p className="text-lg text-center mt-2 text-gray-500">Banco virtual moderno y seguro. Transferencias instantáneas, control total de tus finanzas, todo desde tu celular.</p> 
        <div className="flex gap-2 mt-8">
          <Button size="lg" onClick={handleLogin} variant="ghost" className="mr-2">Login</Button>
          <Button size="lg" onClick={handleRegister} variant="default">Register</Button>
        </div>
      </div>
    </>
  );
}
