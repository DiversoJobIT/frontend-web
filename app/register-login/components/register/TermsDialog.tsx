import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface TermsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function TermsDialog({ open, onOpenChange }: TermsDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto p-6 rounded-2xl bg-white shadow-xl">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-[#0a59a3] text-xl font-bold">
            Términos de Protección de Datos Personales
          </DialogTitle>
          <DialogDescription className="text-xs text-gray-500">
            DiversoJob - Plataforma de Empleo Inclusivo
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 text-xs text-gray-600 leading-relaxed">
          <section>
            <h3 className="mb-1 text-gray-900 font-bold">1. Recopilación de Datos</h3>
            <p>
              DiversoJob recopila información personal necesaria para la intermediación laboral, incluyendo: 
              nombre completo, cédula de identidad, carnet de discapacidad, contacto, experiencia laboral, 
              educación y habilidades profesionales.
            </p>
          </section>

          <section>
            <h3 className="mb-1 text-gray-900 font-bold">2. Uso de la Información</h3>
            <p>
              Los datos recopilados serán utilizados exclusivamente para: conectar talento con oportunidades 
              laborales, verificar la autenticidad de perfiles, generar estadísticas anónimas sobre inclusión 
              laboral, y mejorar nuestros servicios.
            </p>
          </section>

          <section>
            <h3 className="mb-1 text-gray-900 font-bold">3. Almacenamiento Seguro</h3>
            <p>
              Toda la información es almacenada en servidores seguros con cifrado de datos. Implementamos 
              medidas técnicas y organizativas para proteger tu información contra acceso no autorizado, 
              pérdida o alteración.
            </p>
          </section>

          <section>
            <h3 className="mb-1 text-gray-900 font-bold">4. Confidencialidad</h3>
            <p>
              Tu cédula, carnet de discapacidad y datos sensibles son tratados con máxima confidencialidad. 
              Solo el equipo autorizado de DiversoJob tiene acceso a estos documentos para fines de verificación.
            </p>
          </section>

          <section>
            <h3 className="mb-1 text-gray-900 font-bold">5. Compartir Información</h3>
            <p>
              Tu información de contacto y CV podrán ser compartidos con empresas registradas en la plataforma 
              únicamente cuando decidas postularte a una vacante o cuando des tu consentimiento explícito.
            </p>
          </section>

          <section>
            <h3 className="mb-1 text-gray-900 font-bold">6. Derechos del Usuario</h3>
            <p>
              Conforme a la Ley Orgánica de Protección de Datos Personales del Ecuador, tienes derecho a: 
              acceder a tus datos, rectificarlos, eliminarlos, oponerte al tratamiento, y solicitar la 
              portabilidad de tu información.
            </p>
          </section>

          <section>
            <h3 className="mb-1 text-gray-900 font-bold">7. Cumplimiento Legal</h3>
            <p>
              DiversoJob cumple con la Ley Orgánica de Protección de Datos Personales del Ecuador y el 
              Reglamento General de Protección de Datos (RGPD) de la Unión Europea en lo aplicable.
            </p>
          </section>

          <section>
            <h3 className="mb-1 text-gray-900 font-bold">8. Contacto</h3>
            <p>
              Para ejercer tus derechos o consultas sobre protección de datos, contáctanos en: 
              privacidad@diversojob.com
            </p>
          </section>
        </div>
        <div className="mt-6 flex justify-end">
          <Button
            onClick={() => onOpenChange(false)}
            className="bg-[#0a59a3] hover:bg-[#004b8d] text-white rounded-xl font-bold cursor-pointer transition-colors"
          >
            Cerrar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
