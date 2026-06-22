import { LogIn } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface LoginActionsSectionProps {
  rememberMe: boolean;
  setRememberMe: (checked: boolean) => void;
  onSwitchToRegister: () => void;
}

export function LoginActionsSection({
  rememberMe,
  setRememberMe,
  onSwitchToRegister,
}: LoginActionsSectionProps) {
  return (
    <div className="space-y-5">
      {/* Recordarme */}
      <div className="flex items-center gap-3">
        <Checkbox
          id="remember-me"
          checked={rememberMe}
          onCheckedChange={(checked) => setRememberMe(checked as boolean)}
        />
        <Label htmlFor="remember-me" className="cursor-pointer text-xs font-normal text-gray-600">
          Recordarme en este dispositivo
        </Label>
      </div>

      {/* Botón de Enviar */}
      <Button
        type="submit"
        className="w-full bg-[#0a59a3] hover:bg-[#004b8d] text-white py-2.5 rounded-xl font-bold cursor-pointer transition-colors shadow-sm mt-2"
      >
        <LogIn className="size-4 mr-2" />
        Iniciar Sesión
      </Button>


    </div>
  );
}
