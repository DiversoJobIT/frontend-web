"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AuthHeader } from "./components/AuthHeader";
import { RegisterSection } from "./components/register/RegisterSection";
import { LoginSection } from "./components/login/LoginSection";

function RegisterLoginForm() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");

  const [activeTab, setActiveTab] = useState<"register" | "login">(
    tabParam === "login" ? "login" : "register"
  );

  const handleTabChange = (tab: "register" | "login") => {
    setActiveTab(tab);
    window.history.replaceState(null, "", `/Talento?tab=${tab}`);
  };

  return (
    <div className="min-h-screen bg-[#fafafa] py-10 px-4 font-sans antialiased text-[#1a1a1a]">
      <div className="mx-auto max-w-3xl">
        <AuthHeader
          title={activeTab === "register" ? "Registro de Talento" : "Iniciar Sesión"}
          subtitle={
            activeTab === "register"
              ? "Completa tu perfil para acceder a oportunidades inclusivas"
              : "Accede a tu cuenta para continuar"
          }
        />
      </div>

      <div
        className={`mx-auto transition-[max-width] duration-300 ease-out ${
          activeTab === "register" ? "max-w-3xl" : "max-w-lg"
        }`}
      >
        <Card className="gap-0 overflow-hidden" variant="elevated">
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

          {activeTab === "register" ? <RegisterSection /> : <LoginSection />}
        </Card>

        <div className="mt-4 text-center text-sm text-gray-600">
          {activeTab === "register" ? (
            <>
              ¿Ya tienes cuenta?{" "}
              <Button variant="link" size="sm" onClick={() => handleTabChange("login")}>
                Inicia sesión aquí
              </Button>
            </>
          ) : (
            <>
              ¿No tienes cuenta?{" "}
              <Button variant="link" size="sm" onClick={() => handleTabChange("register")}>
                Regístrate aquí
              </Button>
            </>
          )}
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
