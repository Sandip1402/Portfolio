'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from "next/image";
import { useTheme } from 'next-themes'
import { FaHome, FaTools, FaEnvelope, FaBars } from 'react-icons/fa'
import ThemeToggle from './ThemeToggle'


const navItems = [
  { href: '/', label: 'Home', icon: FaHome },
  { href: '/projects', label: 'Projects', icon: FaTools },
  { href: '/contact', label: 'Contact', icon: FaEnvelope },
]

export default function Navbar() {

  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { theme, resolvedTheme, setTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  useEffect(() => {
    setMounted(true);

    // closes menu on mobile when clicked outside
    function handleClickOutside(event: Event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setMobileOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <header className='sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur'>
      <nav className='mx-auto flex max-w-6xl items-center justify-between px-6 py-4'>
        <Link href="/">
          {mounted && (
            <Image
              src={isDark ? "/logo_dark.png" : "/logo_light.png"}
              alt="SD Logo"
              width={48}
              height={48}
              className="rounded-full"
              priority
            />
          )}
        </Link>

        {/* Desktop */}
        <ul className='hidden items-center gap-6 md:flex'>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className='relative flex items-center gap-2 rounded-xl px-4 py-2 transition-all duration-300'
                >
                  <div
                    className={`flex items-center gap-2 ${isActive
                      ? 'bg-clip-text text-transparent'
                      : 'text-(--foreground)/80 hover:text-accent'
                      }`}
                    style={
                      isActive
                        ? { backgroundImage: 'var(--gradient)' }
                        : undefined
                    }
                  >
                    {/* Icon */}
                    <Icon
                      size={18}
                      className={
                        isActive
                          ? 'text-accent drop-shadow-[0_0_8px_var(--glow)]'
                          : 'text-(--foreground)/70'
                      }
                    />

                    {/* Gradient text */}
                    <span
                      className={
                        isActive
                          ? 'bg-clip-text text-transparent font-semibold'
                          : 'text-(--foreground)/80 font-medium'
                      }
                      style={
                        isActive
                          ? { backgroundImage: 'var(--gradient)' }
                          : undefined
                      }
                    >
                      {item.label}
                    </span>
                  </div>

                </Link>
              </li>
            )
          })}

          <li>
            {mounted && (
              <ThemeToggle
                theme={resolvedTheme}
                setTheme={setTheme}
              />
            )}
          </li>
        </ul>



        {/* Mobile */}
        <div ref={menuRef} className='relative md:hidden'>
          <button
            aria-label='mobile-navmenu'
            onClick={() => setMobileOpen(!mobileOpen)}
            className='rounded-xl border border-border bg-card p-2'
          >
            <FaBars className='h-5 w-5 text-foreground' />
          </button>

          {mobileOpen && (
            <div className='absolute right-0 top-14 z-50 min-w-60 rounded-2xl border border-border bg-card p-3 shadow-2xl'>
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href

                return (
                  <Link key={item.href} href={item.href} className='block rounded-xl px-4 py-3' onClick={() => setMobileOpen(false)}>
                    <div className={`flex items-center gap-2 ${isActive
                      ? 'bg-clip-text text-transparent'
                      : 'text-(--foreground)/80 hover:text-accent'
                      }`} >
                      <Icon
                        size={18}
                        className={
                          isActive
                            ? 'text-accent drop-shadow-[0_0_8px_var(--glow)]'
                            : 'text-(--foreground)/70'
                        }
                      />

                      <span
                        className={
                          isActive
                            ? 'bg-clip-text text-transparent font-semibold'
                            : 'text-(--foreground)/80 font-medium'
                        }
                        style={
                          isActive
                            ? { backgroundImage: 'var(--gradient)' }
                            : undefined
                        }>
                        {item.label}
                      </span>
                    </div>
                  </Link>
                )
              })}
              <div className='mt-3 border-t border-border pt-3'>
                {mounted &&
                  <ThemeToggle
                    theme={resolvedTheme}
                    setTheme={setTheme}
                    onToggle={() => setMobileOpen(false)}
                  />}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}