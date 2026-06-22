import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface DataProtectionSectionProps {
  acceptedTerms: boolean;
  setAcceptedTerms: (checked: boolean) => void;
  onReadTermsClick: () => void;
}

export function DataProtectionSection({
  acceptedTerms,
  setAcceptedTerms,
  onReadTermsClick,
}: DataProtectionSectionProps) {
  return (
    <div className="border-t border-gray-100 pt-6">
      <div className="bg-slate-50 p-5 rounded-2xl border border-gray-100 space-y-3">
        <h4 className="font-bold text-[#0a59a3] text-sm">
          Protección de Datos Personales
        </h4>
        <p className="text-xs text-gray-600 leading-relaxed">
          Al registrarte en DiversoJob, aceptas que tu información personal (incluyendo cédula, 
          carnet de discapacidad y CV) será tratada de manera confidencial y almacenada de forma 
          segura. Toda la información será utilizada exclusivamente con fines de intermediación 
          laboral inclusiva.
        </p>
        <p className="text-xs text-gray-600 leading-relaxed">
          DiversoJob cumple con la <strong>Ley Orgánica de Protección de Datos Personales del Ecuador</strong> y 
          principios internacionales de privacidad. Tus datos no serán compartidos con terceros sin tu 
          consentimiento expreso.
        </p>
        <button
          type="button"
          className="text-[#0a59a3] hover:text-[#004b8d] hover:underline text-xs font-semibold block transition-colors mt-2 cursor-pointer"
          onClick={onReadTermsClick}
        >
          Leer términos completos de protección de datos →
        </button>
      </div>

      <div className="flex items-start gap-3 mt-4">
        <Checkbox
          id="terms"
          checked={acceptedTerms}
          onCheckedChange={(checked) => setAcceptedTerms(checked as boolean)}
          required
        />
        <Label htmlFor="terms" className="cursor-pointer text-xs leading-normal font-normal text-gray-600">
          Acepto los términos y condiciones de protección de datos personales y confirmo 
          que la información proporcionada es verídica *
        </Label>
      </div>
    </div>
  );
}
