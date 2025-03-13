import { useState, ReactNode, useEffect } from "react";
import { AuthContext, AuthContextType } from "../hooks/useAuth";

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [token, setToken] = useState<string | null>(() => {
    return sessionStorage.getItem("authToken");
  });

  useEffect(() => {
    if (token) {
      sessionStorage.setItem("authToken", token);
    } else {
      sessionStorage.removeItem("authToken");
    }
  }, [token]);

  const login = (token: string) => setToken(token);
  const logout = () => setToken(null);

  const value: AuthContextType = {
    token,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
