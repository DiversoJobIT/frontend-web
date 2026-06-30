import Image from "next/image";

const posts = [
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1200",
    title: "Bienvenido a diversoJob: Donde el talento no tiene barreras",
    author: "Angie",
    date: "Marzo 19, 2026",
    excerpt: "En DiversoJob tenemos una convicción clara: el talento no entiende de límites, solo de capacidades. No somos solo una bolsa de empleo, somos un movimiento por la inclusión laboral real."
  },
  {
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
    title: "Cómo escribir un CV inclusivo que destaque tus habilidades",
    author: "Carlos",
    date: "Marzo 15, 2026",
    excerpt: "Tu currículum es tu primera impresión. Aprende a redactarlo enfocándote en competencias, logros y valor aportado, sin sesgos ni barreras innecesarias."
  },
  {
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
    title: "Entrevistas inclusivas: claves para evaluar talento real",
    author: "María",
    date: "Marzo 10, 2026",
    excerpt: "Las empresas que adoptan procesos de selección inclusivos encuentran mejor talento. Te contamos cómo estructurar entrevistas justas y efectivas."
  }
]

export default function Blog() {
  return (
    <section aria-labelledby="blog-heading" className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="blog-heading" className="text-3xl sm:text-4xl font-bold text-gray-900">Nuestro Blog</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Aprende sobre inclusión laboral y crecimiento profesional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                  <span>{post.author}</span>
                  <span aria-hidden="true">·</span>
                  <time dateTime="2026-03-19">{post.date}</time>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 rounded-sm"
                >
                  Leer más
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a59a3] focus-visible:ring-offset-2"
          >
            Ver todos los artículos
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
