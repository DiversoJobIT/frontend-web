"use client";

import { useState } from "react";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LoginFieldsSection } from "./LoginFieldsSection";
import { LoginActionsSection } from "./LoginActionsSection";

interface LoginSectionProps {
  onSwitchToRegister: () => void;
}

export function LoginSection({ onSwitchToRegister }: LoginSectionProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Iniciando sesión como: ${email}`);
    // Aquí iría la lógica de autenticación
  };

  return (
    <>
      <CardHeader className="p-8 border-b border-gray-50">
        <CardTitle className="text-xl font-bold text-gray-900">
          Bienvenido de nuevo
        </CardTitle>
        <CardDescription className="text-xs text-gray-400">
          Ingresa tus credenciales para acceder a DiversoJob
        </CardDescription>
      </CardHeader>
      <CardContent className="px-8 pb-8 pt-6">
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Subsección 1: Campos */}
          <LoginFieldsSection
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
          />

          {/* Subsección 2: Acciones y Enlaces */}
          <LoginActionsSection
            rememberMe={rememberMe}
            setRememberMe={setRememberMe}
            onSwitchToRegister={onSwitchToRegister}
          />
        </form>
      </CardContent>
    </>
  );
}
