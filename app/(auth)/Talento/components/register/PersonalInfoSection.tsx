import { User, Mail, Phone, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PasswordInput } from "@/components/ui/password-input";

export function PersonalInfoSection() {
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="fullname">Nombre completo *</Label>
          <div className="relative">
            <User className="absolute left-3.5 top-3 size-4 text-gray-400" />
            <Input
              id="fullname"
              name="fullname"
              type="text"
              placeholder="Angélica Zambrano"
              className="pl-10"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Correo electrónico *</Label>
          <div className="relative">
            <Mail className="absolute left-3.5 top-3 size-4 text-gray-400" />
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="tu@email.com"
              className="pl-10"
              required
            />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="phone">Teléfono *</Label>
          <div className="relative">
            <Phone className="absolute left-3.5 top-3 size-4 text-gray-400" />
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+593 99 617 9276"
              className="pl-10"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">Ubicación *</Label>
          <div className="relative">
            <MapPin className="absolute left-3.5 top-3 size-4 text-gray-400" />
            <Input
              id="location"
              name="location"
              type="text"
              placeholder="Quito, Ecuador"
              className="pl-10"
              required
            />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="password">Contraseña *</Label>
          <PasswordInput
            id="password"
            name="password"
            placeholder="••••••••"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirm-password">Confirmar contraseña *</Label>
          <PasswordInput
            id="confirm-password"
            name="confirm-password"
            placeholder="••••••••"
            required
          />
        </div>
      </div>
    </div>
  );
}
