"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { loginSchema } from "@/lib/schemas/auth";
import { signInWithPassword } from "@/lib/supabase/auth";
import { LoginFieldsSection } from "./LoginFieldsSection";
import { LoginActionsSection } from "./LoginActionsSection";

export function LoginSection() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const passwordUpdated = searchParams.get("passwordUpdated") === "true";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    const parsed = loginSchema.safeParse({ email, password });
    if (!parsed.success) {
      setSuccess(false);
      setError(parsed.error.issues[0]?.message ?? "Revisa tus credenciales.");
      return;
    }

    setIsSubmitting(true);
    setError("");
    setSuccess(false);

    try {
      const { error: signInError } = await signInWithPassword(
        parsed.data.email,
        parsed.data.password
      );

      if (signInError) {
        setError("Usuario y/o contraseña son incorrectos");
        return;
      }

      setSuccess(true);
      router.refresh();
    } catch {
      setError("Usuario y/o contraseña son incorrectos");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <CardHeader className="px-6 pt-5 pb-3">
        <CardTitle className="text-xl font-bold text-gray-900">
          Bienvenido de nuevo
        </CardTitle>
        <CardDescription className="text-xs text-gray-400">
          Ingresa tus credenciales para acceder a DiversoJob
        </CardDescription>
      </CardHeader>
      <CardContent className="px-6 pb-6 pt-2">
        <form onSubmit={handleSubmit} className="space-y-4">
          {passwordUpdated && !error && (
            <Alert variant="success">
              <AlertDescription>
                Contraseña actualizada. Inicia sesión con tu nueva contraseña.
              </AlertDescription>
            </Alert>
          )}

          {success && !passwordUpdated && (
            <Alert variant="success">
              <AlertDescription>Sesión iniciada correctamente.</AlertDescription>
            </Alert>
          )}

          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <LoginFieldsSection
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
          />

          <LoginActionsSection
            rememberMe={rememberMe}
            setRememberMe={setRememberMe}
            isSubmitting={isSubmitting}
          />
        </form>
      </CardContent>
    </>
  );
}
