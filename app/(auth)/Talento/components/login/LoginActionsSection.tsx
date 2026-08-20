import { LogIn } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface LoginActionsSectionProps {
  rememberMe: boolean;
  setRememberMe: (checked: boolean) => void;
  isSubmitting: boolean;
}

export function LoginActionsSection({
  rememberMe,
  setRememberMe,
  isSubmitting,
}: LoginActionsSectionProps) {
  return (
    <div className="space-y-4">
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

      <Button
        type="submit"
        variant="primary"
        size="lg"
        fullWidth
        loading={isSubmitting}
        loadingText="Iniciando sesión..."
        leftIcon={<LogIn />}
      >
        Iniciar Sesión
      </Button>
    </div>
  );
}
