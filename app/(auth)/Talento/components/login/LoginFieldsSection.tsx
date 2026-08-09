import Link from "next/link";
import { Mail, Lock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface LoginFieldsSectionProps {
  email: string;
  setEmail: (val: string) => void;
  password: string;
  setPassword: (val: string) => void;
}

export function LoginFieldsSection({
  email,
  setEmail,
  password,
  setPassword,
}: LoginFieldsSectionProps) {
  return (
    <div className="space-y-5">
      {/* Correo Electrónico */}
      <div className="space-y-2">
        <Label htmlFor="login-email">Correo electrónico *</Label>
        <div className="relative">
          <Mail className="absolute left-3.5 top-3 size-4 text-gray-400" />
          <Input
            id="login-email"
            type="email"
            placeholder="tu@email.com"
            className="pl-10"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      </div>

      {/* Contraseña */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="login-password">Contraseña *</Label>
          <Link
            href="/forgot-password"
            className="text-xs font-semibold text-[#0a59a3] hover:text-[#004b8d] hover:underline cursor-pointer"
          >
            ¿Olvidaste tu contraseña?
          </Link>
        </div>
        <div className="relative">
          <Lock className="absolute left-3.5 top-3 size-4 text-gray-400" />
          <Input
            id="login-password"
            type="password"
            placeholder="••••••••"
            className="pl-10"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
      </div>
    </div>
  );
}
