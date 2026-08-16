"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
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

function getResetErrorMessage(errorMessage: string) {
  const text = errorMessage.toLowerCase();

  if (text.includes("redirect")) {
    return "La URL de redirección no está permitida. En Supabase, agrega http://localhost:3000/** en Authentication → URL Configuration.";
  }

  if (text.includes("rate") || text.includes("limit")) {
    return "Se alcanzó el límite de correos. Inténtalo de nuevo más tarde.";
  }

  if (
    text.includes("smtp") ||
    text.includes("sending") ||
    text.includes("error sending") ||
    text.includes("unexpected_failure") ||
    text.includes("535") ||
    text.includes("authentication failed")
  ) {
    return "No se pudo enviar el correo. Supabase no autenticó el SMTP de Hostinger. Revisa usuario, contraseña, host y puerto en Authentication → SMTP Settings.";
  }

  return "No se pudo procesar la solicitud.";
}

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleResetPassword = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setMessage("");

    try {
      const supabase = createClient();
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/update-password`,
      });

      if (error) {
        console.error("resetPasswordForEmail:", error);
        setMessage(getResetErrorMessage(error.message));
        return;
      }

      setMessage(
        "Si existe una cuenta asociada a este correo, recibirás un enlace para cambiar tu contraseña."
      );
    } catch (error) {
      console.error("resetPasswordForEmail:", error);
      setMessage("No se pudo procesar la solicitud.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] py-12 px-4 font-sans antialiased text-[#1a1a1a]">
      <div className="container mx-auto max-w-xl">
        <AuthHeader
          title="Recuperar contraseña"
          subtitle="Te enviaremos un enlace para crear una nueva contraseña"
        />

        <Card className="gap-0 border border-gray-100 shadow-md rounded-2xl bg-white overflow-hidden">
          <CardHeader className="px-8 pt-8 pb-3">
            <CardTitle className="text-xl font-bold text-gray-900">
              Olvidé mi contraseña
            </CardTitle>
            <CardDescription className="text-xs text-gray-400">
              Ingresa el correo electrónico de tu cuenta
            </CardDescription>
          </CardHeader>
          <CardContent className="px-8 pb-8 pt-1">
            <form onSubmit={handleResetPassword} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="forgot-email">Correo electrónico *</Label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3 size-4 text-gray-400" />
                  <Input
                    id="forgot-email"
                    type="email"
                    placeholder="tu@email.com"
                    className="pl-10"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#0a59a3] hover:bg-[#004b8d] text-white py-2.5 rounded-xl font-bold cursor-pointer transition-colors shadow-sm mt-2"
              >
                {isSubmitting ? "Enviando..." : "Recuperar contraseña"}
              </Button>

              {message && (
                <p className="text-sm text-gray-600 text-center">{message}</p>
              )}

              <div className="text-center pt-2">
                <Link
                  href="/register-login?tab=login"
                  className="text-sm font-bold text-[#0a59a3] hover:text-[#004b8d] hover:underline"
                >
                  Volver a iniciar sesión
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
