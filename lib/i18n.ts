import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  es: {
    translation: {
      nav: {
        inicio: "Inicio",
        candidatos: "Para candidatos",
        empresas: "Para Empresas",
        contacto: "Contactanos",
        blog: "Blog",
        registroEmpresa: "Registro Empresa",
        registro: "Registro"
      },
      hero: {
        title: "Encuentra tu trabajo ideal",
        prefix: "Contrata expertos o se contratado en ",
        labelJob: "Que trabajo estas buscando?",
        labelWhere: "Dónde?",
        labelCat: "Categorias",
        placeholderJob: "Trabajo, habilidad o industria",
        placeholderWhere: "Ciudad, Estado",
        placeholderCat: "Selecciona Categoría",
        btnBuscar: "Buscar",
        advanced: "Necesitas más opciones de búsqueda?",
        advancedLink: "Búsqueda Avanzada"
      },
      jobs: {
        heading: "Ofertas de Empleo Disponibles",
        subheading: "Explora las últimas vacantes y postúlate hoy mismo para dar el siguiente paso en tu carrera profesional.",
        all: "Todos los Trabajos",
        featured: "Destacados",
        noResults: "No se encontraron ofertas que coincidan con tu búsqueda.",
        reset: "Restablecer filtros",
        apply: "Postularse Ahora",
        details: "Detalles del Empleo",
        successMsg: "¡Postulación enviada con éxito!",
        successDesc: "Hemos enviado tu perfil a la empresa. Te contactarán pronto.",
        close: "Cerrar"
      },
      features: {
        title: "¿Por qué elegir DiversoJob?",
        subtitle: "Conectamos el talento más calificado con empresas comprometidas con la diversidad, equidad y la inclusión real.",
        card1Title: "Alcance Global y Remoto",
        card1Desc: "Accede a ofertas de empleo en todo el mundo con modalidad remota o híbrida que se adaptan a tu estilo de vida.",
        card2Title: "Empresas Verificadas",
        card2Desc: "Colaboramos únicamente con corporaciones comprometidas con un entorno laboral diverso, inclusivo y libre de discriminación.",
        card3Title: "IA para Candidatos",
        card3Desc: "Nuestra plataforma optimiza tu currículum de forma automatizada garantizando procesos ciegos y libres de sesgos."
      },
      footer: {
        statsJobs: "Ofertas de Empleo",
        statsResumes: "CVs Publicados",
        candidates: "Para Candidatos",
        companies: "Para Empresas",
        otros: "Otros",
        legal: "Legal",
        cBrowseJobs: "Buscar Empleos",
        cBrowseCategories: "Explorar Categorías",
        cDashboard: "Panel de Candidato",
        cJobAlerts: "Alertas de Empleo",
        cBookmarks: "Mis Favoritos",
        coBrowseCandidates: "Buscar Candidatos",
        coDashboard: "Panel de Empresa",
        coAddJob: "Publicar Empleo",
        coPackages: "Planes de Empleo",
        oJobPage: "Página de Empleo",
        oTaskPage: "Página de Proyecto",
        oResumePage: "Página de CV",
        oBlog: "Blog",
        oContact: "Contacto",
        lPrivacy: "Política de Privacidad",
        lTerms: "Condiciones de Uso",
        lFaq: "Preguntas Frecuentes",
        rights: "© Todos los derechos reservados.",
      },
      modal: {
        jobDescription: "Descripción del Puesto",
        inclusiveCommitment: "Compromiso Inclusivo:",
        commitmentDesc: "Este puesto está respaldado por las políticas de contratación sin sesgos de DiversoJob. Al postularte, tu perfil se procesará eliminando sesgos inconscientes referentes a género, edad, nacionalidad o procedencia institucional."
      }
    }
  },
  en: {
    translation: {
      nav: {
        inicio: "Home",
        candidatos: "For Candidates",
        empresas: "For Companies",
        contacto: "Contact Us",
        blog: "Blog",
        registroEmpresa: "Employer Sign Up",
        registro: "Register"
      },
      hero: {
        title: "Find your ideal job",
        prefix: "Hire experts or be hired in ",
        labelJob: "What job are you looking for?",
        labelWhere: "Where?",
        labelCat: "Categories",
        placeholderJob: "Job, skill or industry",
        placeholderWhere: "City, State",
        placeholderCat: "Select Category",
        btnBuscar: "Search",
        advanced: "Need more search options?",
        advancedLink: "Advanced Search"
      },
      jobs: {
        heading: "Available Job Openings",
        subheading: "Explore the latest vacancies and apply today to take the next step in your professional career.",
        all: "All Jobs",
        featured: "Featured",
        noResults: "No jobs found matching your search.",
        reset: "Reset filters",
        apply: "Apply Now",
        details: "Job Details",
        successMsg: "Application sent successfully!",
        successDesc: "We have sent your profile to the company. They will contact you soon.",
        close: "Close"
      },
      features: {
        title: "Why choose DiversoJob?",
        subtitle: "We connect the most qualified talent with companies committed to diversity, equity, and real inclusion.",
        card1Title: "Global & Remote Scope",
        card1Desc: "Access job offers worldwide with remote or hybrid modes that fit your lifestyle.",
        card2Title: "Verified Companies",
        card2Desc: "We only collaborate with corporations committed to a diverse, inclusive, and discrimination-free work environment.",
        card3Title: "AI for Candidates",
        card3Desc: "Our platform automatically optimizes your resume, ensuring blind and bias-free selection processes."
      },
      footer: {
        statsJobs: "Job Listings",
        statsResumes: "Resumes Posted",
        candidates: "For Candidates",
        companies: "For Companies",
        otros: "Others",
        legal: "Legal",
        cBrowseJobs: "Browse Jobs",
        cBrowseCategories: "Browse Categories",
        cDashboard: "Candidate Dashboard",
        cJobAlerts: "Job Alerts",
        cBookmarks: "My Bookmarks",
        coBrowseCandidates: "Browse Candidates",
        coDashboard: "Employer Dashboard",
        coAddJob: "Add Job",
        coPackages: "Job Packages",
        oJobPage: "Job Page",
        oTaskPage: "Task Page",
        oResumePage: "Resume Page",
        oBlog: "Blog",
        oContact: "Contact",
        lPrivacy: "Privacy Policy",
        lTerms: "Terms of Use",
        lFaq: "FAQ",
        rights: "© All Rights Reserved.",
      },
      modal: {
        jobDescription: "Job Description",
        inclusiveCommitment: "Inclusive Commitment:",
        commitmentDesc: "This position is backed by DiversoJob's bias-free hiring policies. When you apply, your profile will be processed by eliminating unconscious biases regarding gender, age, nationality, or institutional background."
      }
    }
  }
};

if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: "es",
      fallbackLng: "es",
      interpolation: {
        escapeValue: false
      }
    });
}

export default i18n;
