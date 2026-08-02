'use client'

import { FiMoon as Moon, FiSun as Sun } from 'react-icons/fi'

type ThemeToggleProps = {
  theme?: string;
  setTheme: (theme: string) => void;
  onToggle?: () => void;
};

export default function ThemeToggle({ theme, setTheme, onToggle }: ThemeToggleProps) {
  const isDark = theme === "dark";

  const handleClick = () => {
    setTheme(isDark ? "light" : "dark");
    onToggle?.();
  };


  return (
    <button
      aria-label='Toggle theme'
      onClick={handleClick}
      className='group relative h-10 w-20 rounded-full border border-border bg-card p-1 shadow-sm transition-all duration-300 hover:shadow-md'
    >
      {/* Background glow */}
      <div className='absolute inset-0 rounded-full bg-linear-to-r from-yellow-400/10 to-blue-400/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100' />

      {/* Sliding thumb */}
      <div
        className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full shadow-md transition-all duration-300 ${isDark
          ? 'translate-x-10 bg-slate-800 text-blue-300'
          : 'translate-x-0 bg-white text-yellow-500'
          }`}
      >
        {isDark ? <Moon size={16} /> : <Sun size={16} />}
      </div>

      {/* Track icons */}
      <Sun
        size={14}
        className={`absolute left-3 top-1/2 -translate-y-1/2 transition-opacity duration-300 ${isDark ? 'opacity-30' : 'opacity-0'
          }`}
      />

      <Moon
        size={14}
        className={`absolute right-3 top-1/2 -translate-y-1/2 transition-opacity duration-300 ${isDark ? 'opacity-0' : 'opacity-30'
          }`}
      />
    </button>
  )
}