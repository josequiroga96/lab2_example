"use client"

import Image from "next/image";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const router = useRouter();

    function handleLogin() {
        router.push("/login");
    }

    function handleRegister() {
        router.push("/register");
    }

    return (
        <>
            <div style={styles.navbar} className="flex justify-between items-center fixed z-50 right-0 left-0 top-0">
                <div className="flex items-center gap-2 ml-10">
                    <Image src="/Bank_tech_big.png" alt="logo" width={50} height={50} />
                    <h1 className="text-2xl font-bold">
                        Bank Tech
                    </h1>
                </div>
                <div className="flex gap-2 mr-10">
                    <Button onClick={handleLogin} variant="ghost" className="mr-2">Login</Button>
                    <Button onClick={handleRegister} variant="default">Register</Button>
                </div>
            </div>
        </>
    )
}

const styles: { [key: string]: React.CSSProperties } = {
    navbar: {
        height: "65px",
        boxShadow: "0 0 20px 0 rgba(6, 17, 135, 0.3)",
    }
}