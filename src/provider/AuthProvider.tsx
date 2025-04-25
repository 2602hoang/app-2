"use client";
import { createContext} from "react";
import { AuthContextType } from "./type";
import { useToken } from "@/hooks/useToken";

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

function AuthProvider({ children }: { children: React.ReactNode }) {
    const { accessToken } = useToken();
  return (
    <AuthContext.Provider value={{ accessToken }}>
      {!!accessToken && children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
