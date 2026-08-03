# DiversoJob — Frontend

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38BDF8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![pnpm](https://img.shields.io/badge/pnpm-F69220?style=flat-square&logo=pnpm)](https://pnpm.io)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-FE5196?style=flat-square&logo=conventionalcommits)](https://www.conventionalcommits.org)

## Qué es DiversoJob

DiversoJob es una plataforma digital inclusiva que conecta a personas con discapacidad con oportunidades laborales dignas, accesibles y sostenibles. Nuestro objetivo es derribar las barreras que enfrentan las personas con discapacidad en el mercado laboral, promoviendo procesos de selección justos, sin sesgos y accesibles para todos.

Este repositorio contiene el **frontend** de la plataforma, construido con un enfoque fuerte en la **accesibilidad (a11y)**, la internacionalización y una experiencia de usuario cuidada.

## Relevancia

- **Inclusión laboral real**: conectamos talento con discapacidad con empresas comprometidas con la diversidad, la equidad y la inclusión.
- **Accesibilidad como prioridad**: la interfaz se desarrolla siguiendo buenas prácticas de accesibilidad web (atributos ARIA, navegación por teclado, skip-links y auditorías con `axe-core`).
- **Experiencia bilingüe**: soporte de internacionalización en español (es) e inglés (en) mediante `i18next`.
- **Contratación sin sesgos**: los procesos de postulación promueven la eliminación de sesgos inconscientes de género, edad, nacionalidad o procedencia institucional.

## Características principales

- **Landing page** con buscador de empleo interactivo (título, ubicación y categoría), filtros activos y pestañas de ofertas (todas / destacadas).
- **Portal de empleo** con ofertas simuladas (`MOCK_JOBS`) y modal de detalle con compromiso inclusivo.
- **Registro / Inicio de sesión** con formulario modular (información personal, documentos requeridos, protección de datos y diálogo de términos y condiciones).
- **Página de preguntas frecuentes (FAQ)** con acordeón.
- **Internacionalización** ES / EN con selector de idioma en el encabezado.
- **Accesibilidad**: skip-link al contenido principal, atributos ARIA, `aria-expanded`, roles de navegación y enfoque visible en todos los componentes interactivos.

## Stack tecnológico

| Tecnología | Propósito |
|---|---|
| [Next.js 16](https://nextjs.org) | Framework de React con App Router y renderizado del lado del servidor |
| [React 19](https://react.dev) | Biblioteca de interfaces de usuario |
| [TypeScript 5](https://www.typescriptlang.org) | Tipado estático del código |
| [Tailwind CSS 4](https://tailwindcss.com) | Estilos y diseño utilitario |
| [shadcn/ui](https://ui.shadcn.com) | Componentes de interfaz reutilizables (estilo `radix-nova`) |
| [Radix UI](https://www.radix-ui.com) | Componentes headless accesibles (dialog, checkbox, label, etc.) |
| [lucide-react](https://lucide.dev) | Iconos |
| [i18next](https://www.i18next.com) / [react-i18next](https://react.i18next.com) | Internacionalización (es/en) |
| [@tanstack/react-query](https://tanstack.com/query) | Gestión de estado del servidor y caché |
| [Zustand](https://zustand-demo.pmnd.rs) | Gestión de estado global del cliente |
| [react-hook-form](https://react-hook-form.com) + [Zod](https://zod.dev) | Manejo de formularios y validación de esquemas |
| [axe-core](https://www.npmjs.com/package/axe-core) | Auditoría y detección de problemas de accesibilidad |
| [pnpm](https://pnpm.io) | Gestor de paquetes |
| [ESLint](https://eslint.org) (`eslint-config-next`) | Linting de código |

## Estructura del proyecto

```
├── app/                          # Rutas y páginas (App Router)
│   ├── landing/                  # Landing page y sus componentes
│   │   └── components/           # Header, Hero, HowItWorks, Companies, Blog, Footer, etc.
│   ├── register-login/           # Autenticación (registro e inicio de sesión)
│   │   └── components/           # AuthHeader, login/, register/
│   ├── faq/                      # Preguntas frecuentes
│   ├── layout.tsx                # Layout raíz con skip-link y metadatos
│   ├── page.tsx                  # Página de inicio (renderiza LandingPage)
│   └── globals.css               # Estilos globales y configuración de Tailwind
├── components/
│   └── ui/                       # Componentes de interfaz (shadcn/ui)
├── lib/
│   ├── i18n.ts                   # Configuración de internacionalización (es/en)
│   └── utils.ts                  # Utilidades (cn)
├── public/                       # Recursos estáticos (logo, SVG, imágenes)
├── components.json               # Configuración de shadcn/ui
├── next.config.ts                # Configuración de Next.js
├── postcss.config.mjs
├── eslint.config.mjs             # Configuración de ESLint
├── tsconfig.json                 # Configuración de TypeScript
└── package.json
```

## Requisitos previos

- **Node.js** 20 o superior
- **pnpm** 9 o superior (gestor de paquetes del proyecto)

## Puesta en marcha

```bash
# 1. Instalar dependencias
pnpm install

# 2. Levantar el servidor de desarrollo
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Scripts disponibles

| Comando | Descripción |
|---|---|
| `pnpm dev` | Inicia el servidor de desarrollo |
| `pnpm build` | Genera una build de producción |
| `pnpm start` | Inicia el servidor de producción |
| `pnpm lint` | Ejecuta ESLint sobre el código |

## Cómo contribuir

¡Gracias por tu interés en contribuir a DiversoJob! Sigue estos pasos:

1. **Clona el repositorio** en tu máquina:

   ```bash
   git clone git@github.com:DiversoJobIT/frontend-web.git
   cd frontend-web
   ```

2. **Crea una rama** desde `master` siguiendo la convención de **Conventional Branches** (ver sección [Nomenclatura de ramas](#nomenclatura-de-ramas)).
3. **Realiza tus cambios** siguiendo los estándares de código del proyecto:
   - Escribe código en **TypeScript** tipado.
   - Usa componentes de `components/ui` siempre que sea posible.
   - Mantén la **accesibilidad** en cada cambio (ARIA, foco visible, navegación por teclado).
   - Añade traducciones ES/EN en `lib/i18n.ts` cuando agregues o modifiques textos.
4. **Verifica tu código** antes de enviar el cambio:

   ```bash
   pnpm lint
   ```

5. **Haz commit** de tus cambios siguiendo la [convención de commits](#convencion-de-commits).
6. **Abre un Pull Request** hacia `master`, describe los cambios realizados y referencia el problema (issue) que resuelve, si existe.

> Nota: los Pull Requests se fusionan en `master`, que es la rama por defecto del repositorio.

### Estándares de código

- Sigue la configuración de **ESLint** del proyecto (eslint-config-next con core-web-vitals y TypeScript).
- No agregues comentarios innecesarios al código.
- Respeta las convenciones de componentes existentes (nombres, estructura y estilo).

## Nomenclatura de ramas

Las ramas de desarrollo se nombran siguiendo la convención **Conventional Branches**, que combina el tipo de cambio con un identificador descriptivo:

```
<tipo>/<descripción-corta>
```

Ejemplos:

- `feat/landing-page`
- `feat/login-register`
- `fix/header-responsive`
- `docs/readme`
- `refactor/form-validation`

### Tipos de rama

| Tipo | Uso |
|---|---|
| `feat/` | Nueva funcionalidad o característica |
| `fix/` | Corrección de errores |
| `docs/` | Documentación |
| `refactor/` | Refactorización de código sin cambiar su comportamiento |
| `style/` | Cambios de formato, estilo o apariencia |
| `test/` | Añadir o modificar pruebas |

> La descripción debe ser corta, descriptiva y en minúsculas, separada por guiones.

## Convención de commits

Este proyecto sigue la especificación **Conventional Commits**. Los mensajes de commit deben tener el siguiente formato:

```
<tipo>(<ámbito>): <descripción>
```

- `<tipo>`: tipo de cambio (obligatorio).
- `<ámbito>`: módulo o componente afectado (opcional, entre paréntesis).
- `<descripción>`: resumen en minúsculas que describa el cambio.

### Tipos de commit

| Tipo | Descripción |
|---|---|
| `feat` | Nueva funcionalidad |
| `fix` | Corrección de errores |
| `refactor` | Cambios de código que no corrigen errores ni agregan funcionalidad |
| `style` | Cambios de formato, estilo visual o apariencia |
| `docs` | Cambios en documentación |
| `test` | Añadir o modificar pruebas |
| `chore` | Tareas de mantenimiento, dependencias o build |

### Ejemplos

- `feat(hero): add typewriter effect and improve accessibility`
- `feat(register-login): implement sliding tabs and clean page layout`
- `fix(login): fix duplicated "¿No tienes cuenta? Regístrate aquí" text`
- `refactor: eliminate duplicated code in login section`
- `docs(readme): document commit and branch conventions`

## Licencia

Este proyecto es privado y su uso está restringido a DiversoJob. Para más información, contacta con el equipo de DiversoJob.
