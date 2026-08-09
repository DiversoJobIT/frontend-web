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

      {/* Modal de Términos (solo se usa en registro) */}
      <TermsDialog open={showTerms} onOpenChange={setShowTerms} />
    </>
  );
}
