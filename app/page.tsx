import Image from 'next/image'
import Link from 'next/link'
import Section from '@/components/Section'
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaBook,
  FaCamera,
  FaGamepad,
  FaPlane
} from 'react-icons/fa'
import {
  SiNextdotjs,
  SiFastapi,
  SiPostgresql,
  SiMongodb,
} from 'react-icons/si'
import { techStyles } from '@/lib/techStyles'
import { resume } from '@/lib/cms/resume'

const skills = [
  { name: 'React', icon: FaReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'FastAPI', icon: SiFastapi },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'MongoDB', icon: SiMongodb },
]

const projects = [
  {
    id: 'ai-powered-food-allergy-detection',
    title: 'AI Food Allergy Detector',
    description:
      'React Native + FastAPI application that analyzes food images, extracts ingredients, and detects allergens using computer vision and NLP.',
  },
  {
    id: 'hoteru',
    title: 'Hoteru',
    description:
      'An ongoing modern full-stack hotel management platform project built using React + Postgresql',
  },
]

const hobbies = [
  {
    title: 'Reading',
    description: 'I enjoy reading about technology, startups, AI, and software engineering.',
    icon: FaBook,
  },
  {
    title: 'Gaming',
    description: 'Strategy and story-driven games help me relax and think creatively.',
    icon: FaGamepad,
  },
  {
    title: 'Photography',
    description: 'I like capturing landscapes, city scenes, and interesting moments during travel.',
    icon: FaCamera,
  },
  {
    title: 'Exploring New Places',
    description: 'Traveling and discovering new environments gives me fresh ideas and perspectives.',
    icon: FaPlane,
  },
]

export default function Home() {
  return (
    <main className='flex-1'>
      {/* Hero */}
      <section className='mx-auto max-w-6xl px-6 py-20 md:py-28'>
        <div className='grid items-center gap-12 md:grid-cols-2'>
          <div className='space-y-6'>
            <p className='font-semibold text-(--accent)'>
              Full Stack Developer • AI Enthusiast
            </p>

            <h1 className='text-5xl md:text-6xl font-bold tracking-tight'>
              <span className='bg-clip-text text-transparent'
                style={{ backgroundImage: 'var(--gradient)' }}
              >
                Sandip
              </span>
            </h1>

            <p className='text-xl font-medium text-foreground'>
              Sandip Das — Full Stack Developer
            </p>

            <p className='max-w-xl text-lg leading-relaxed text-foreground/80'>
              Final-year Computer Science student focused on building modern
              web, mobile, and AI-powered applications with React, Next.js,
              FastAPI, and machine learning integrations.
            </p>

            <div className='flex flex-wrap gap-4'>
              <Link
                href='/projects'
                className='rounded-2xl px-6 py-3 font-medium text-white shadow-lg transition-all hover:scale-[1.02]'
                style={{
                  border: '',
                  backgroundImage: 'var(--gradient)',
                  boxShadow: '0 10px 30px var(--glow)',
                }}
              >
                View Projects
              </Link>

              <a
                href={resume.file}
                download
                className='rounded-xl border border-(--border) bg-(--card) px-6 py-3 font-medium text-foreground transition hover:border-(--accent)'
              >
                Download Resume
              </a>

              <p className='text-xs text-(--text-muted) self-end'>
                * Updated {resume.updatedAt}
              </p>
            </div>

            <div className='flex items-center gap-5 pt-2'>
              <a
                href='https://github.com/Sandip1402'
                target='_blank'
                rel='noopener noreferrer'
                className='text-foreground/70 transition hover:text-(--accent)'
              >
                <FaGithub size={26} />
              </a>

              <a
                href='https://www.linkedin.com/in/sandip-das-10795925b/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-foreground/70 transition hover:text-(--accent)'
              >
                <FaLinkedin size={26} />
              </a>

              <a
                href='mailto:sd5147083@gmail.com'
                className='text-foreground/70 transition hover:text-(--accent)'
              >
                <FaEnvelope size={26} />
              </a>
            </div>
          </div>

          <div className='flex justify-center md:justify-end'>
            <div className='rounded-full border border-(--border) bg-(--card) p-2 shadow-lg'>
              <Image
                src='/profile.jpeg'
                alt='Sandip Das'
                width={340}
                height={340}
                priority
                className='h-72 w-72 rounded-full object-cover md:h-84 md:w-84'
              />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <Section containerClassName='max-w-5xl'>
        <div className='mb-8'>
          <h2 className='text-3xl font-bold text-foreground'>
            About Me
          </h2>
        </div>

        <div className='space-y-5 text-foreground/80 leading-relaxed'>
          <p>
            I enjoy combining <span className='font-semibold text-foreground'>clean user interfaces</span> with <span className='font-semibold text-foreground'>practical backend systems</span>. My recent work focuses on AI-assisted applications that solve real-world problems.
          </p>

          <p>
            The project I’m most proud of is an <span className='font-semibold text-foreground'>AI-powered Food Allergy Detection app</span> that uses computer vision, OCR, and NLP techniques to analyze food products and identify potential allergens for users with dietary restrictions.
          </p>

          <p>
            I’m currently learning <span className='font-semibold text-foreground'>Next.js, TypeScript, system design, and DevOps fundamentals</span> while actively seeking internship and full-time software engineering opportunities.
          </p>
        </div>
      </Section>

      {/* Skills */}
      <Section>
        <div className='mb-10 flex items-center justify-between'>
          <div>
            <h2 className='text-3xl font-bold text-foreground'>Skills</h2>
            <p className='mt-2 text-foreground/70'>
              Technologies I use most frequently.
            </p>
          </div>

          <Link
            href='/skills'
            className='hidden text-sm font-medium text-(--accent) hover:underline md:inline'
          >
            View all skills →
          </Link>
        </div>

        <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6'>
          {skills.map((skill) => {
            const Icon = skill.icon

            return (
              <div
                key={skill.name}
                className='group flex flex-col items-center justify-center rounded-2xl border border-(--border) bg-(--card) p-5 transition hover:-translate-y-1 hover:border-(--accent)'
              >
                <Icon
                  size={36}
                  className={`mb-3 ${techStyles[skill.name]} transition group-hover:scale-110`}
                />
                <span className='text-sm font-medium text-foreground'>
                  {skill.name}
                </span>
              </div>
            )
          })}
        </div>
      </Section>

      {/* Featured Projects */}
      <Section className='bg-(--bg-secondary) border-y border-(--border)'>
        <div className='mx-auto max-w-6xl px-6 py-20'>
          <div className='mb-10 flex items-center justify-between'>
            <div>
              <h2 className='text-3xl font-bold text-foreground'>
                Featured Projects
              </h2>
              <p className='mt-2 text-foreground/70'>
                A quick look at the projects that best represent my skills.
              </p>
            </div>

            <Link
              href='/projects'
              className='hidden text-sm font-medium text-(--accent) hover:underline md:inline'
            >
              View all projects →
            </Link>
          </div>

          <div className='grid gap-6 md:grid-cols-2'>
            {projects.map((project) => (
              <article
                key={project.title}
                className='rounded-3xl border border-(--border) bg-background p-6 transition hover:-translate-y-1 hover:border-(--accent)'
              >
                <h3 className='text-2xl font-semibold text-foreground'>
                  {project.title}
                </h3>

                <p className='mt-4 leading-relaxed text-foreground/75'>
                  {project.description}
                </p>

                <Link
                  href={`/projects#${project.id}`}
                  className='mt-6 inline-flex items-center font-medium text-(--accent) hover:underline'
                >
                  Learn more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* Beyond Code */}
      <section className='mx-auto max-w-6xl px-6 py-20'>
        <div className='mb-8'>
          <h2 className='text-3xl font-bold text-foreground'>
            Beyond Code
          </h2>
          <p className='mt-2 text-foreground/70'>
            A few things that keep me curious and creative outside software development.
          </p>
        </div>

        <div className='grid gap-4 sm:grid-cols-2'>
          {hobbies.map((hobby) => {
            const Icon = hobby.icon

            return (
              <div
                key={hobby.title}
                className='flex items-center gap-4 rounded-2xl border border-(--border) bg-(--card) p-5'
              >
                <div className='rounded-xl bg-(--accent)/10 p-3'>
                  <Icon size={24} className='text-(--accent)' />
                </div>

                <div>
                  <h3 className='font-semibold text-foreground'>
                    {hobby.title}
                  </h3>
                  <p className='text-sm text-foreground/65'>
                    {hobby.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Contact CTA */}
      <Section className='border-t border-(--border) bg-(--card)' containerClassName='max-w-4xl text-center'>
        <div className='mx-auto max-w-4xl px-6 py-20 text-center'>
          <h2 className='text-3xl font-bold text-foreground'>
            Let’s Build Something Together
          </h2>

          <p className='mx-auto mt-4 max-w-2xl text-lg text-foreground/75'>
            I’m currently looking for internship and full-time software
            engineering opportunities, especially in frontend, full-stack, and
            AI-focused roles.
          </p>

          <div className='mt-8 flex flex-wrap justify-center gap-4'>
            <Link
              href='/contact'
              className='rounded-2xl px-6 py-3 font-medium text-white shadow-lg transition-all hover:scale-[1.02]'
              style={{ backgroundImage: 'var(--gradient)' }}
            >
              Contact Me
            </Link>

            <a
              href='mailto:sd5147083@gmail.com'
              className='rounded-xl border border-(--border) bg-background px-6 py-3 font-medium text-foreground transition hover:border-(--accent)'
            >
              Send Email
            </a>
          </div>
        </div>
      </Section>
    </main>
  )
}