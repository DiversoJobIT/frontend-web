"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PersonalInfoSection } from "./components/PersonalInfoSection";
import { RequiredDocumentsSection } from "./components/RequiredDocumentsSection";
import { DataProtectionSection } from "./components/DataProtectionSection";
import { TermsDialog } from "./components/TermsDialog";

export default function RegisterPage() {
  const router = useRouter();
  const [showTerms, setShowTerms] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [cedulaFile, setCedulaFile] = useState<File | null>(null);
  const [carnetFile, setCarnetFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!cedulaFile || !carnetFile) {
      alert("Por favor, sube todos los documentos requeridos");
      return;
    }

    if (!acceptedTerms) {
      alert("Debes aceptar los términos y condiciones de protección de datos");
      return;
    }

    // Procesamiento del formulario exitoso (mock)
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-[#fafafa] py-12 px-4 font-sans antialiased text-[#1a1a1a]">
      <div className="container mx-auto max-w-3xl">
        {/* Header con el Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center mb-4">
            <Image
              src="/DiversoJob.png"
              alt="DiversoJob Logo"
              width={160}
              height={160}
              className="h-12 w-auto"
              priority
            />
          </div>
          <h1 className="text-3xl font-extrabold text-[#0a59a3] tracking-tight">
            Registro de Talento
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Completa tu perfil para acceder a oportunidades inclusivas
          </p>
        </div>

        {/* Card Principal del Formulario */}
        <Card className="border border-gray-100 shadow-md rounded-2xl bg-white overflow-hidden">
          <CardHeader className="p-8 border-b border-gray-50">
            <CardTitle className="text-xl font-bold text-gray-900">
              Información Personal
            </CardTitle>
            <CardDescription className="text-xs text-gray-400">
              Todos los campos marcados con * son obligatorios
            </CardDescription>
          </CardHeader>
          <CardContent className="px-8 pb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Sección 1: Información Personal */}
              <PersonalInfoSection />

              {/* Sección 2: Documentos Obligatorios */}
              <RequiredDocumentsSection
                cedulaFile={cedulaFile}
                setCedulaFile={setCedulaFile}
                carnetFile={carnetFile}
                setCarnetFile={setCarnetFile}
              />

              {/* Sección 3: Protección de Datos */}
              <DataProtectionSection
                acceptedTerms={acceptedTerms}
                setAcceptedTerms={setAcceptedTerms}
                onReadTermsClick={() => setShowTerms(true)}
              />

              {/* Acciones del Formulario */}
              <div className="flex gap-4 pt-4 border-t border-gray-100">
                <Button
                  type="submit"
                  className="flex-1 bg-[#0a59a3] hover:bg-[#004b8d] text-white py-2.5 rounded-xl font-bold cursor-pointer transition-colors shadow-sm disabled:opacity-50 disabled:pointer-events-none"
                  disabled={!acceptedTerms || !cedulaFile || !carnetFile}
                >
                  <Upload className="size-4 mr-2" />
                  Crear mi perfil
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="rounded-xl border border-gray-200 text-gray-600 hover:bg-slate-50 cursor-pointer"
                  onClick={() => router.push("/")}
                >
                  Cancelar
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Sección 4: Modal de Términos y Condiciones */}
        <TermsDialog open={showTerms} onOpenChange={setShowTerms} />

        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            ¿Ya tienes cuenta?{" "}
            <button
              onClick={() => router.push("/")}
              className="text-[#0a59a3] hover:text-[#004b8d] hover:underline font-bold transition-colors cursor-pointer"
            >
              Inicia sesión aquí
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
