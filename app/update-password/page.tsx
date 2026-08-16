"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";
import { AuthHeader } from "@/app/register-login/components/AuthHeader";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createClient } from "@/lib/supabase/client";

export default function UpdatePasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    setError("");

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    setIsSubmitting(true);

    try {
      const supabase = createClient();
      const { error: updateError } = await supabase.auth.updateUser({
        password,
      });

      if (updateError) {
        setError("No se pudo actualizar la contraseña. Solicita un nuevo enlace.");
        return;
      }

      await supabase.auth.signOut();
      router.push("/register-login?tab=login&passwordUpdated=true");
    } catch {
      setError("No se pudo actualizar la contraseña. Solicita un nuevo enlace.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] py-12 px-4 font-sans antialiased text-[#1a1a1a]">
      <div className="container mx-auto max-w-lg">
        <AuthHeader
          title="Nueva contraseña"
          subtitle="Elige una contraseña segura para tu cuenta"
        />

        <Card className="gap-0 border border-gray-100 shadow-md rounded-2xl bg-white overflow-hidden">
          <CardHeader className="px-8 pt-8 pb-3">
            <CardTitle className="text-xl font-bold text-gray-900">
              Cambiar contraseña
            </CardTitle>
            <CardDescription className="text-xs text-gray-400">
              Ingresa y confirma tu nueva contraseña
            </CardDescription>
          </CardHeader>
          <CardContent className="px-8 pb-8 pt-1">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="new-password">Nueva contraseña *</Label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-3 size-4 text-gray-400" />
                  <Input
                    id="new-password"
                    type="password"
                    placeholder="••••••••"
                    className="pl-10"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    minLength={6}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirmar contraseña *</Label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-3 size-4 text-gray-400" />
                  <Input
                    id="confirm-password"
                    type="password"
                    placeholder="••••••••"
                    className="pl-10"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    minLength={6}
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#0a59a3] hover:bg-[#004b8d] text-white py-2.5 rounded-xl font-bold cursor-pointer transition-colors shadow-sm mt-2"
              >
                {isSubmitting ? "Actualizando..." : "Cambiar contraseña"}
              </Button>

              {error && <p className="text-sm text-red-600 text-center">{error}</p>}
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
