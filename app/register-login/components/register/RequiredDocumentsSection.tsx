import { FileText, AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface RequiredDocumentsSectionProps {
  cedulaFile: File | null;
  setCedulaFile: (file: File | null) => void;
  carnetFile: File | null;
  setCarnetFile: (file: File | null) => void;
}

export function RequiredDocumentsSection({
  cedulaFile,
  setCedulaFile,
  carnetFile,
  setCarnetFile,
}: RequiredDocumentsSectionProps) {
  return (
    <div className="border-t border-gray-100 pt-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">
        Documentos Requeridos
      </h3>
      <Alert className="mb-5 border-[#0a59a3] bg-[#0a59a3]/5">
        <AlertCircle className="size-4 text-[#0a59a3] shrink-0" />
        <AlertDescription className="text-[#0a59a3] font-medium leading-relaxed">
          La carga de cédula y carnet de discapacidad es obligatoria para validar tu perfil 
          y garantizar la autenticidad de los datos en la plataforma.
        </AlertDescription>
      </Alert>

      <div className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="cedula" className="text-gray-700">
            Cédula de identidad * (PDF, JPG o PNG - Max 5MB)
          </Label>
          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <FileText className="absolute left-3.5 top-3 size-4 text-gray-400" />
              <Input
                id="cedula"
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                className="pl-10 file:hidden cursor-pointer"
                onChange={(e) => setCedulaFile(e.target.files?.[0] || null)}
                required
              />
            </div>
            {cedulaFile && (
              <span className="text-[#0da845] text-xs font-semibold shrink-0">
                ✓ {cedulaFile.name.substring(0, 20)}
              </span>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="carnet" className="text-gray-700">
            Carnet de discapacidad * (PDF, JPG o PNG - Max 5MB)
          </Label>
          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <FileText className="absolute left-3.5 top-3 size-4 text-gray-400" />
              <Input
                id="carnet"
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                className="pl-10 file:hidden cursor-pointer"
                onChange={(e) => setCarnetFile(e.target.files?.[0] || null)}
                required
              />
            </div>
            {carnetFile && (
              <span className="text-[#0da845] text-xs font-semibold shrink-0">
                ✓ {carnetFile.name.substring(0, 20)}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
