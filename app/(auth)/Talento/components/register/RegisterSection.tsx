"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PersonalInfoSection } from "./PersonalInfoSection";
import { RequiredDocumentsSection } from "./RequiredDocumentsSection";
import { DataProtectionSection } from "./DataProtectionSection";
import { TermsDialog } from "./TermsDialog";

export function RegisterSection() {
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
    <>
      <CardHeader className="p-8 border-b border-gray-50">
        <CardTitle className="text-xl font-bold text-gray-900">
          Información Personal
        </CardTitle>
        <CardDescription className="text-xs text-gray-400">
          Todos los campos marcados con * son obligatorios
        </CardDescription>
      </CardHeader>
      <CardContent className="px-8 pb-8 pt-6">
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
              variant="primary"
              size="lg"
              className="flex-1"
              disabled={!acceptedTerms || !cedulaFile || !carnetFile}
              leftIcon={<Upload />}
            >
              Crear mi perfil
            </Button>
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={() => router.push("/")}
            >
              Cancelar
            </Button>
          </div>
        </form>
      </CardContent>

      {/* Modal de Términos (solo se usa en registro) */}
      <TermsDialog open={showTerms} onOpenChange={setShowTerms} />
    </>
  );
}
