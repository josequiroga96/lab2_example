import { useRouter } from "next/navigation";
import { useAuth } from "./auth-context"
import { useEffect } from "react";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { isAuthenticated, isLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        console.log("isAuthenticated", isAuthenticated);
        console.log("isLoading", isLoading);

        if (!isLoading && !isAuthenticated) {
            console.log("redirecting to login");
            router.push("/login");
        }
    }, [isAuthenticated, isLoading, router]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!isAuthenticated) {
        return <div>Unauthorized</div>;
    }

    return (
        <>
            {children}
        </>
    );
}