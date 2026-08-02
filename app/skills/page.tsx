import Section from '@/components/Section'
import { techStyles } from '@/lib/techStyles'
import {
  FaReact,
  FaNodeJs,
  FaGit,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from 'react-icons/fa'
import { GrMysql } from 'react-icons/gr'
import {
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiNextdotjs,
  SiFastapi,
  SiTypescript,
  SiPostman,
  SiWireshark,
} from 'react-icons/si'

const categories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: FaReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'HTML', icon: FaHtml5 },
      { name: 'CSS', icon: FaCss3Alt },
      { name: 'JavaScript', icon: FaJs },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Express', icon: SiExpress },
      { name: 'FastAPI', icon: SiFastapi },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MySql', icon: GrMysql }
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: FaGit }, 
      { name: 'Postman', icon: SiPostman },
      { name: 'Wireshark', icon: SiWireshark }
    ],
  },
]

export default function SkillsPage() {
  return (
    <main className='flex-1'>
      <Section className='bg-(--bg-secondary) border-y border-(--border)'>
        {/* Header */}
        <div className='mb-14 text-center'>
          <p className='mb-3 font-semibold text-(--accent)'>
            TECHNOLOGY STACK
          </p>

          <h1 className='text-4xl font-bold tracking-tight md:text-5xl'>
            <span
              className='bg-clip-text text-transparent'
              style={{ backgroundImage: 'var(--gradient)' }}
            >
              My Skills
            </span>
          </h1>

          <p className='mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-(--text-muted)'>
            Technologies I use to build modern web applications, mobile
            experiences, APIs, and AI-powered products.
          </p>
        </div>

        {/* Categories */}
        <div className='grid gap-8 lg:grid-cols-2'>
          {categories.map((category) => (
            <section
              key={category.title}
              className='rounded-3xl border border-(--border) bg-(--card) p-8 shadow-sm transition-all duration-300 hover:border-(--accent) hover:shadow-2xl'
            >
              {/* Category title */}
              <div className='mb-8 flex items-center gap-3'>
                <div
                  className='h-3 w-3 rounded-full'
                  style={{ backgroundImage: 'var(--gradient)' }}
                />

                <h2 className='text-2xl font-semibold text-foreground'>
                  {category.title}
                </h2>
              </div>

              {/* Skills grid */}
              <div className='grid grid-cols-2 gap-4 sm:grid-cols-3'>
                {category.skills.map((skill) => {
                  const Icon = skill.icon

                  return (
                    <div
                      key={skill.name}
                      className='group flex flex-col items-center justify-center rounded-2xl border border-(--border) bg-(--background) p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-(--accent) hover:shadow-xl'
                    >
                      {/* Icon */}
                      <div className='mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-(--bg-secondary) transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg'>
                        <Icon
                          size={30}
                          className={`${techStyles[skill.name]} transition-transform duration-300`}
                        />
                      </div>

                      {/* Label */}
                      <span className='text-sm font-medium text-foreground'>
                        {skill.name}
                      </span>
                    </div>
                  )
                })}
              </div>
            </section>
          ))}
        </div>

        {/* Bottom summary */}
        <div className='mt-14 grid gap-4 sm:grid-cols-3'>
          <div className='rounded-2xl border border-(--border) bg-(--card) p-6 text-center'>
            <p className='text-3xl font-bold text-(--accent)'>10+</p>
            <p className='mt-2 text-sm text-(--text-muted)'>
              Core technologies
            </p>
          </div>

          <div className='rounded-2xl border border-(--border) bg-(--card) p-6 text-center'>
            <p className='text-3xl font-bold text-(--accent)'>Full Stack</p>
            <p className='mt-2 text-sm text-(--text-muted)'>
              Frontend + Backend
            </p>
          </div>

          <div className='rounded-2xl border border-(--border) bg-(--card) p-6 text-center'>
            <p className='text-3xl font-bold text-(--accent)'>AI</p>
            <p className='mt-2 text-sm text-(--text-muted)'>
              CV • NLP • ML Integration
            </p>
          </div>
        </div>
      </Section>
    </main>
  )
}