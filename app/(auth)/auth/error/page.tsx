"use client";

import { useRouter } from "next/navigation";
import { AuthHeader } from "@/app/(auth)/Talento/components/AuthHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AuthErrorPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#fafafa] py-10 px-4 font-sans antialiased text-[#1a1a1a]">
      <div className="mx-auto max-w-lg">
        <AuthHeader
          title="Enlace no válido"
          subtitle="No pudimos completar la verificación"
        />

        <Card className="gap-0 overflow-hidden" variant="elevated">
          <CardHeader className="px-6 pt-5 pb-3">
            <CardTitle className="text-xl font-bold text-gray-900">
              El enlace expiró o no es válido
            </CardTitle>
            <CardDescription className="text-xs text-gray-400">
              Solicita un nuevo correo de recuperación e inténtalo de nuevo
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 px-6 pb-6 pt-2">
            <Button
              type="button"
              variant="primary"
              size="lg"
              fullWidth
              onClick={() => router.push("/forgot-password")}
            >
              Solicitar un nuevo enlace
            </Button>
            <Button
              type="button"
              variant="outline"
              size="lg"
              fullWidth
              onClick={() => router.push("/Talento?tab=login")}
            >
              Volver a iniciar sesión
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
