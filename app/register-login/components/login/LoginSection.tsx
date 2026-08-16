"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { createClient } from "@/lib/supabase/client";
import { LoginFieldsSection } from "./LoginFieldsSection";
import { LoginActionsSection } from "./LoginActionsSection";

interface LoginSectionProps {
  onSwitchToRegister: () => void;
}

export function LoginSection({ onSwitchToRegister }: LoginSectionProps) {
  const searchParams = useSearchParams();
  const passwordUpdated = searchParams.get("passwordUpdated") === "true";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        alert("Usuario y/o contraseña son incorrectos");
        return;
      }

      alert("Usuario logeado");
    } catch {
      alert("Usuario y/o contraseña son incorrectos");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <CardHeader className="px-8 pt-6 pb-2">
        <CardTitle className="text-xl font-bold text-gray-900">
          Bienvenido de nuevo
        </CardTitle>
        <CardDescription className="text-xs text-gray-400">
          Ingresa tus credenciales para acceder a DiversoJob
        </CardDescription>
        {passwordUpdated && (
          <p className="mt-3 text-sm text-green-700">
            Contraseña actualizada. Inicia sesión con tu nueva contraseña.
          </p>
        )}
      </CardHeader>
      <CardContent className="px-8 pb-8 pt-2">
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
