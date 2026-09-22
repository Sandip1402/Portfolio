import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    id: 'ai-powered-food-allergy-detection',
    title: 'AI-Powered Food Allergy Detector',
    description:
      'React Native app with a FastAPI backend that analyzes food images, extracts ingredients, and detects potential allergens using computer vision and NLP models.',
    tech: ['React Native', 'Expo', 'FastAPI', 'Python', 'CLIP', 'NLP'],
    github: 'https://github.com/Sandip1402/food-allergen-detection',
    demo: '#',
  },
  {
    id: 'hoteru',
    title: 'Hoteru',
    description:
      'A modern full-stack hotel management platform featuring room booking, authentication, reservation management, and an intuitive admin dashboard.',
    tech: ['React', 'Node.js', 'Express', 'Postgresql', 'Auth0', 'Tailwind CSS'],
    github: 'https://github.com/Sandip1402/hoteru',
    demo: 'https://hoteru-personal.netlify.app/'
  },
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    description:
      'Modern Next.js portfolio with dark/light theme, responsive design, SEO optimization, and project-focused architecture.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/Sandip1402/Portfolio',
    demo: 'https://sandipdas-portfolio.netlify.app/',
  },
]

export default function ProjectsPage() {
  return (
    <main className='mx-auto max-w-6xl px-6 py-20'>
      <div className='mb-12'>
        <h1 className='text-4xl font-bold text-foreground'>My Projects</h1>
        <p className='mt-3 text-foreground/70'>
          A selection of projects that showcase my frontend, backend, and AI development skills.
        </p>
      </div>

      <div className='grid gap-8 md:grid-cols-2'>
        {projects.map((project) => (
          <article
            id={project.id}
            key={project.title}
            className='rounded-3xl border border-(--border) bg-(--card) p-6 transition-all duration-300 hover:-translate-y-1 hover:border-(--accent) hover:shadow-2xl'
          >
            <h2 className='text-2xl font-semibold text-foreground'>
              {project.title}
            </h2>

            <p className='mt-4 leading-relaxed text-foreground/80'>
              {project.description}
            </p>

            <div className='mt-5 flex flex-wrap gap-2'>
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className='rounded-full border border-(--border) bg-background px-3 py-1 text-sm text-foreground'
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className='mt-6 flex gap-4'>
              <a
                href={project.github}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 rounded-xl border border-(--border) px-4 py-2 text-foreground transition hover:border-(--accent) hover:text-(--accent)'
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href={project.demo}
                className='inline-flex items-center gap-2 rounded-xl bg-(--accent) px-4 py-2 text-white transition hover:opacity-90'
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}