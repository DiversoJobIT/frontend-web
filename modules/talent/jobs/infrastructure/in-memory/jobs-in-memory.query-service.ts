import type { JobsQueryService } from "../../application/queries";
import type { GetJobsResultDTO } from "../../application/dtos";

export class JobsInMemoryQueryService implements JobsQueryService {
  private JOBS = new Map<number, any>(
    [
      [
        1,
        {
          id: 1,
          title: "Desarrollador React & Next.js Senior",
          company: "DiversoTech Solutions",
          logo: "DT",
          logoBg: "bg-blue-600",
          location: "Madrid, España",
          category: "Desarrollo de Software",
          salary: "€45,000 - €55,000 / año",
          type: "Remoto / Tiempo Completo",
          posted: "Hace 2 días",
          featured: true,
          description: "Buscamos un desarrollador Next.js con experiencia en TypeScript, Tailwind CSS y optimización SEO para liderar nuestros proyectos frontend de alto rendimiento.",
        },
      ],
      [
        2,
        {
          id: 2,
          title: "Diseñador de Experiencia de Usuario (UI/UX)",
          company: "Creative Studio Latam",
          logo: "CS",
          logoBg: "bg-purple-600",
          location: "Barcelona, España",
          category: "Diseño",
          salary: "€38,000 - €44,000 / año",
          type: "Híbrido",
          posted: "Hace 1 día",
          featured: true,
          description: "Únete a nuestro equipo creativo para diseñar interfaces intuitivas, prototipos interactivos y realizar pruebas de usabilidad con usuarios finales.",
        },
      ],
      [
        3,
        {
          id: 3,
          title: "Especialista en Growth Marketing & SEO",
          company: "Global Brands Agency",
          logo: "GB",
          logoBg: "bg-amber-500",
          location: "Bogotá, Colombia",
          category: "Marketing",
          salary: "$2,200 - $3,000 / mes",
          type: "Remoto",
          posted: "Hace 3 días",
          featured: false,
          description: "Buscamos un experto en posicionamiento web y estrategias de adquisición de clientes con dominio de Google Analytics, SEMrush y pauta digital.",
        },
      ],
      [
        4,
        {
          id: 4,
          title: "Project Manager de Software (Ágil)",
          company: "Innova Software",
          logo: "IS",
          logoBg: "bg-emerald-600",
          location: "Ciudad de México, México",
          category: "Gestión de Proyectos",
          salary: "$3,500 - $4,500 / mes",
          type: "Tiempo Completo",
          posted: "Hace 5 días",
          featured: true,
          description: "Responsable de coordinar sprints de desarrollo, remover impedimentos y facilitar la comunicación entre los stakeholders y el equipo técnico.",
        },
      ],
      [
        5,
        {
          id: 5,
          title: "Especialista de Reclutamiento y Diversidad",
          company: "DiversoJob Corp",
          logo: "DJ",
          logoBg: "bg-[#0a59a3]",
          location: "Madrid, España",
          category: "Recursos Humanos",
          salary: "€32,000 - €38,000 / año",
          type: "Presencial",
          posted: "Hace 12 horas",
          featured: true,
          description: "Ayúdanos a construir equipos inclusivos y diversos. Estarás a cargo del ciclo completo de contratación enfocándote en talento subrepresentado.",
        },
      ],
      [
        6,
        {
          id: 6,
          title: "Ingeniero Cloud DevOps (AWS / Kubernetes)",
          company: "DiversoTech Solutions",
          logo: "DT",
          logoBg: "bg-blue-600",
          location: "Remoto (España)",
          category: "Desarrollo de Software",
          salary: "€50,000 - €60,000 / año",
          type: "Remoto",
          posted: "Hace 4 días",
          featured: false,
          description: "Buscamos un Ingeniero de DevOps para automatizar infraestructura, gestionar pipelines de CI/CD y mantener clusters de Kubernetes en producción.",
        },
      ],
      [
        7,
        {
          id: 7,
          title: "Diseñador de Producto Digital Jr.",
          company: "Creative Studio Latam",
          logo: "CS",
          logoBg: "bg-purple-600",
          location: "Madrid, España",
          category: "Diseño",
          salary: "€25,000 - €30,000 / año",
          type: "Tiempo Completo",
          posted: "Hace 1 semana",
          featured: false,
          description: "Excelente oportunidad para diseñadores junior que quieran perfeccionar sus habilidades en Figma, sistemas de diseño y flujos de usuario complejos.",
        },
      ],
    ],
  );

  getJobs(pagination: { page: number; limit: number }): Promise<GetJobsResultDTO> {
    const jobs = Array.from(this.JOBS.values());
    const total = jobs.length;
    const page = pagination.page;
    const limit = pagination.limit;
    const totalPages = Math.ceil(total / limit);
    const first = `/api/v1/jobs?page=1&limit=${limit}`;
    const last = `/api/v1/jobs?page=${totalPages}&limit=${limit}`;
    const prev = page > 1 ? `/api/v1/jobs?page=${page - 1}&limit=${limit}` : null;
    const next = page < totalPages ? `/api/v1/jobs?page=${page + 1}&limit=${limit}` : null;
    
    return Promise.resolve({
      jobs: jobs.slice((page - 1) * limit, page * limit),
      pagination: {
        first,
        last,
        prev,
        next,
      },
    });
  }
}
