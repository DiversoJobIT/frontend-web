"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, MailCheck } from "lucide-react";
import { SiGmail } from "react-icons/si";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { forgotPasswordSchema } from "@/lib/schemas/auth";
import { resetPasswordForEmail } from "@/lib/supabase/auth";

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
    return "No se pudo enviar el correo. Revisa la configuración SMTP en Authentication → SMTP Settings.";
  }

  return "No se pudo procesar la solicitud.";
}

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleResetPassword = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    const parsed = forgotPasswordSchema.safeParse({ email });
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Ingresa un correo válido.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const { error: resetError } = await resetPasswordForEmail(parsed.data.email);

      if (resetError) {
        console.error("resetPasswordForEmail:", resetError);
        setError(getResetErrorMessage(resetError.message));
        return;
      }

      setIsSubmitted(true);
    } catch (resetError) {
      console.error("resetPasswordForEmail:", resetError);
      setError("No se pudo procesar la solicitud.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] py-10 px-4 font-sans antialiased text-[#1a1a1a]">
      <div className="mx-auto max-w-lg">
        <AuthHeader
          title="Recuperar contraseña"
          subtitle="Te enviaremos un enlace para crear una nueva contraseña"
        />

        <Card className="gap-0 overflow-hidden" variant="elevated">
          {isSubmitted ? (
            <CardContent className="px-6 py-8 text-center">
              <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-emerald-50">
                <MailCheck className="size-7 text-emerald-600" aria-hidden="true" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">
                Correo enviado
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Si existe una cuenta asociada a{" "}
                <span className="font-semibold text-gray-900">{email}</span>,
                recibirás un enlace para cambiar tu contraseña.
              </p>
              <p className="mt-2 text-sm text-gray-500">
                Revisa también la carpeta de spam. El enlace solo funciona en este mismo navegador.
              </p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <Button
                  type="button"
                  variant="outline"
                  className="size-24 flex-col gap-2 px-2"
                  onClick={() =>
                    window.open(
                      "https://mail.google.com/mail/u/0/#inbox",
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                >
                  <SiGmail className="size-8 text-[#EA4335]" aria-hidden="true" />
                  Gmail
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="size-24 flex-col gap-2 px-2"
                  onClick={() =>
                    window.open(
                      "https://outlook.live.com/mail/",
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                >
                  <PiMicrosoftOutlookLogoFill className="size-8 text-[#0078D4]" aria-hidden="true" />
                  Outlook
                </Button>
              </div>
              <div className="mt-4 flex justify-center">
                <Button
                  type="button"
                  variant="primary"
                  size="lg"
                  onClick={() => router.push("/Talento?tab=login")}
                >
                  Volver a iniciar sesión
                </Button>
              </div>
            </CardContent>
          ) : (
            <>
              <CardHeader className="px-6 pt-5 pb-3">
                <CardTitle className="text-xl font-bold text-gray-900">
                  Olvidé mi contraseña
                </CardTitle>
                <CardDescription className="text-xs text-gray-400">
                  Ingresa el correo electrónico de tu cuenta
                </CardDescription>
              </CardHeader>
              <CardContent className="px-6 pb-6 pt-2">
                <form onSubmit={handleResetPassword} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="forgot-email">Correo electrónico *</Label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
                      <Input
                        id="forgot-email"
                        type="email"
                        placeholder="tu@email.com"
                        className="pl-10"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isSubmitting}
                        required
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    loading={isSubmitting}
                    loadingText="Enviando..."
                  >
                    Recuperar contraseña
                  </Button>

                  {error && (
                    <Alert variant="destructive">
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}

                  <Button
                    type="button"
                    variant="link"
                    fullWidth
                    onClick={() => router.push("/Talento?tab=login")}
                  >
                    Volver a iniciar sesión
                  </Button>
                </form>
              </CardContent>
            </>
          )}
        </Card>
      </div>
    </div>
  );
}
