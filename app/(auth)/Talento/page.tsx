"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Card } from "@/components/ui/card";
import { AuthHeader } from "./components/AuthHeader";
import { RegisterSection } from "./components/register/RegisterSection";
import { LoginSection } from "./components/login/LoginSection";

function RegisterLoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");

  const [activeTab, setActiveTab] = useState<"register" | "login">(
    tabParam === "login" ? "login" : "register"
  );

  const handleTabChange = (tab: "register" | "login") => {
    setActiveTab(tab);
    router.replace(`/Talento?tab=${tab}`, { scroll: false });
  };

  return (
    <div className="min-h-screen bg-[#fafafa] py-12 px-4 font-sans antialiased text-[#1a1a1a]">
      <div className="container mx-auto max-w-3xl">
        {/* Cabecera dinámica compartida */}
        <AuthHeader
          title={activeTab === "register" ? "Registro de Talento" : "Iniciar Sesión"}
          subtitle={
            activeTab === "register"
              ? "Completa tu perfil para acceder a oportunidades inclusivas"
              : "Accede a tu cuenta para continuar"
          }
        />

        {/* Card Principal de Autenticación */}
        <Card className="border border-gray-100 shadow-md rounded-2xl bg-white overflow-hidden">
          {/* Barra de Pestañas (Tabs) con indicador deslizante */}
          <div className="relative flex border-b border-gray-100 bg-slate-50 p-1.5">
            <div
              className={`absolute top-1.5 bottom-1.5 left-1.5 w-[calc(50%-6px)] rounded-xl bg-white shadow-xs border border-gray-100/50 transition-transform duration-300 ease-out ${
                activeTab === "login" ? "translate-x-full" : "translate-x-0"
              }`}
            />
            <button
              type="button"
              onClick={() => handleTabChange("register")}
              className={`relative z-10 flex-1 text-center py-3 text-sm font-bold rounded-xl transition-colors duration-300 cursor-pointer ${
                activeTab === "register"
                  ? "text-[#0a59a3]"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Registro
            </button>
            <button
              type="button"
              onClick={() => handleTabChange("login")}
              className={`relative z-10 flex-1 text-center py-3 text-sm font-bold rounded-xl transition-colors duration-300 cursor-pointer ${
                activeTab === "login"
                  ? "text-[#0a59a3]"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Iniciar Sesión
            </button>
          </div>

          {/* Formulario Dinámico según Pestaña */}
          {activeTab === "register" ? (
            <RegisterSection />
          ) : (
            <LoginSection onSwitchToRegister={() => handleTabChange("register")} />
          )}
        </Card>

        {/* Enlace inferior de alternancia rápida */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            {activeTab === "register" ? (
              <>
                ¿Ya tienes cuenta?{" "}
                <button
                  onClick={() => handleTabChange("login")}
                  className="text-[#0a59a3] hover:text-[#004b8d] hover:underline font-bold transition-colors cursor-pointer"
                >
                  Inicia sesión aquí
                </button>
              </>
            ) : (
              <>
                ¿No tienes cuenta?{" "}
                <button
                  onClick={() => handleTabChange("register")}
                  className="text-[#0a59a3] hover:text-[#004b8d] hover:underline font-bold transition-colors cursor-pointer"
                >
                  Regístrate aquí
                </button>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function RegisterLoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-[#fafafa] font-sans">Cargando...</div>}>
      <RegisterLoginForm />
    </Suspense>
  );
}
