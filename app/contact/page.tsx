import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'

const contacts = [
  {
    name: 'Email',
    href: 'mailto:sd5147083@gmail.com',
    icon: FaEnvelope,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sandip-das-10795925b/',
    icon: FaLinkedin,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/Sandip1402',
    icon: FaGithub,
  },
]

export default function ContactPage() {
  return (
    <main className='mx-auto flex max-w-4xl flex-1 items-center px-6 py-20'>
      <div className='w-full rounded-3xl border border-(--border) bg-(--card) p-8 md:p-10'>
        <div className='mb-8'>
          <h1 className='text-4xl font-bold text-foreground'>
            Contact Me
          </h1>

          <p className='mt-4 max-w-2xl leading-relaxed text-foreground/75'>
            I’m always open to discussing internship opportunities, full-time
            roles, collaborations, and interesting software or AI projects.
            Feel free to reach out through any of the platforms below.
          </p>
        </div>

        <div className='grid gap-4 sm:grid-cols-3'>
          {contacts.map((item) => {
            const Icon = item.icon

            return (
              <a
                key={item.name}
                href={item.href}
                target={item.name !== 'Email' ? '_blank' : undefined}
                rel={
                  item.name !== 'Email' ? 'noopener noreferrer' : undefined
                }
                className='group flex items-center gap-4 rounded-2xl border border-(--border) bg-background p-5 transition hover:-translate-y-1 hover:border-(--accent)'
              >
                <div className='rounded-xl bg-(--accent)/10 p-3'>
                  <Icon
                    size={24}
                    className='text-(--accent) transition group-hover:scale-110'
                  />
                </div>

                <div>
                  <p className='font-semibold text-foreground'>
                    {item.name}
                  </p>
                  <p className='text-sm text-foreground/60'>
                    {item.name === 'Email'
                      ? 'Send an email'
                      : `Visit my ${item.name} profile`}
                  </p>
                </div>
              </a>
            )
          })}
        </div>

        <div className='mt-8 rounded-2xl border border-(--border) bg-background p-5'>
          <p className='text-sm text-foreground/70'>
            <span className='font-semibold text-foreground'>
              Currently seeking:
            </span>{' '}
            Frontend, Full Stack, and AI-focused software engineering roles.
          </p>
        </div>
      </div>
    </main>
  )
}