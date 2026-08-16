import Link from "next/link";
import { AuthHeader } from "@/app/register-login/components/AuthHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AuthErrorPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] py-12 px-4 font-sans antialiased text-[#1a1a1a]">
      <div className="container mx-auto max-w-xl">
        <AuthHeader
          title="Enlace no válido"
          subtitle="No pudimos completar la verificación"
        />

        <Card className="border border-gray-100 shadow-md rounded-2xl bg-white overflow-hidden">
          <CardHeader className="p-8 border-b border-gray-50">
            <CardTitle className="text-xl font-bold text-gray-900">
              El enlace expiró o no es válido
            </CardTitle>
            <CardDescription className="text-xs text-gray-400">
              Solicita un nuevo correo de recuperación e inténtalo de nuevo
            </CardDescription>
          </CardHeader>
          <CardContent className="px-8 pb-8 pt-6 space-y-4 text-center">
            <Link
              href="/forgot-password"
              className="inline-flex w-full items-center justify-center bg-[#0a59a3] hover:bg-[#004b8d] text-white py-2.5 rounded-xl font-bold transition-colors shadow-sm"
            >
              Solicitar un nuevo enlace
            </Link>
            <Link
              href="/register-login?tab=login"
              className="inline-block text-sm font-bold text-[#0a59a3] hover:text-[#004b8d] hover:underline"
            >
              Volver a iniciar sesión
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
