"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AuthHeader } from "@/app/(auth)/Talento/components/AuthHeader";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { PasswordInput } from "@/components/ui/password-input";
import { updatePasswordSchema } from "@/lib/schemas/auth";
import { signOut, updatePassword } from "@/lib/supabase/auth";

export default function UpdatePasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    const parsed = updatePasswordSchema.safeParse({ password, confirmPassword });
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Revisa los datos ingresados.");
      return;
    }

    setError("");
    setIsSubmitting(true);

    try {
      const { error: updateError } = await updatePassword(parsed.data.password);

      if (updateError) {
        setError("No se pudo actualizar la contraseña. Solicita un nuevo enlace.");
        return;
      }

      await signOut();
      router.push("/Talento?tab=login&passwordUpdated=true");
    } catch {
      setError("No se pudo actualizar la contraseña. Solicita un nuevo enlace.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] py-10 px-4 font-sans antialiased text-[#1a1a1a]">
      <div className="container mx-auto max-w-lg">
        <AuthHeader
          title="Nueva contraseña"
          subtitle="Elige una contraseña segura para tu cuenta"
        />

        <Card className="gap-0 overflow-hidden" variant="elevated">
          <CardHeader className="px-6 pt-5 pb-3">
            <CardTitle className="text-xl font-bold text-gray-900">
              Cambiar contraseña
            </CardTitle>
            <CardDescription className="text-xs text-gray-400">
              Ingresa y confirma tu nueva contraseña
            </CardDescription>
          </CardHeader>
          <CardContent className="px-6 pb-6 pt-2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="new-password">Nueva contraseña *</Label>
                <PasswordInput
                  id="new-password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  minLength={6}
                  disabled={isSubmitting}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirmar contraseña *</Label>
                <PasswordInput
                  id="confirm-password"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  minLength={6}
                  disabled={isSubmitting}
                  required
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                loading={isSubmitting}
                loadingText="Actualizando..."
              >
                Cambiar contraseña
              </Button>

              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
