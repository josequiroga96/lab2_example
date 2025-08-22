import { User } from "./types";

export type SuccessResponse = {
  success: boolean;
  user: Omit<User, "password">;
}

type Transaction = {
  id: string;
  date: string;
  description: string;
  type: "ingreso" | "egreso";
  status: "exitoso" | "rechazado";
  amount: number;
}

const mockData = {
    user: {
      id: "u_demo",
      name: "Usuario Demo",
      email: "demo@bank.com",
      password: "demo123",
    } as User,
    account: {
      cbu: "2850590940090418135201",
      alias: "mi.alias.banco",
      balance: 253450.32,
      currency: "ARS",
    },
    recipients: [
      {
        id: "r_alquiler",
        name: "Alquiler Palermo",
        alias: "casap.alq.ar",
        cbu: "2850590940090418135202",
      },
      {
        id: "r_juan",
        name: "Juan Pérez",
        alias: "juan.perez.mp",
        cbu: "2850590940090418135203",
      },
      {
        id: "r_servicios",
        name: "Servicios SA",
        alias: "servicios.sa",
        cbu: "2850590940090418135204",
      },
    ],
    transactions: [
      {
        id: "TX-1074",
        date: "2025-08-13T15:22:00Z",
        description: "Transferencia recibida - Juan Pérez",
        type: "ingreso" as const,
        status: "exitoso" as const,
        amount: 150000.0,
      },
      {
        id: "TX-1073",
        date: "2025-08-12T19:40:00Z",
        description: "Pago supermercado Coto",
        type: "egreso" as const,
        status: "exitoso" as const,
        amount: -23500.25,
      },
      // ... more transactions would be loaded from the JSON file
    ] as Transaction[],
  }
  
  // Session management
  let currentSession: { userId: string; token: string } | null = null

export const API = {
    async register(email: string, password: string, name: string): Promise<SuccessResponse> {
        // const response = await fetch("http://localhost:3000/api/register", {
        //     method: "POST",
        //     body: JSON.stringify({ email, password, name }),
        // }).catch((error) => {
        //     console.error("Error al registrar usuario:", error);
        //     throw error;
        // });

        // return response.json();

        await new Promise((resolve) => setTimeout(resolve, 500)) // Simulate network delay

        if (email === mockData.user.email) {
            throw new Error("El email ya está registrado");
        }

        // In a real app, this would create a new user
        mockData.user = { id: "u_new", name, email, password } as User; 
        currentSession = { userId: mockData.user.id, token: "mock_token_123" };

        return { success: true, user: { id: mockData.user.id, name, email } };
    },

    async login(email: string, password: string): Promise<SuccessResponse> {
        // const response = await fetch("http://localhost:3000/api/login", {
        //     method: "POST",
        //     body: JSON.stringify({ email, password }),
        // });
        // return response.json();

        await new Promise((resolve) => setTimeout(resolve, 500)) // Simulate network delay

        if (email !== mockData.user.email || password !== mockData.user.password) {
            throw new Error("Email o contraseña incorrectos");
        }

        currentSession = { userId: mockData.user.id, token: "mock_token_123" };

        return { success: true, user: { id: mockData.user.id, name: mockData.user.name, email: mockData.user.email } };
    },

    async logout(): Promise<void> {
        // const response = await fetch("http://localhost:3000/api/logout", {
        //     method: "POST",
        //     headers: {
        //         Authorization: `Bearer ${currentSession?.token}`,
        //     },
        // });
        // return response.json();

        await new Promise((resolve) => setTimeout(resolve, 500)) // Simulate network delay

        if (!currentSession) {
            throw new Error("No hay sesión activa");
        }

        currentSession = null;
    },

    async getUser(): Promise<User> {
        // const response = await fetch("http://localhost:3000/api/user", {
        //     method: "GET",
        //     headers: {
        //         Authorization: `Bearer ${currentSession?.token}`,
        //     },
        // });
        // return response.json();

        await new Promise((resolve) => setTimeout(resolve, 500)) // Simulate network delay

        return mockData.user;
    },

    isAuthenticated(): boolean {
        return currentSession !== null;
    },
}