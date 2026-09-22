'use client'

import { useState, useEffect } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'About', href: '/about' },
  { label: 'Practice Areas', href: '/practice-areas' },
  { label: 'Our Team', href: '/team' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
]

export function MobileNavigation() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeydown)
    return () => document.removeEventListener('keydown', onKeydown)
  }, [])

  return (
    <>
      <button
        type="button"
        className={cn('mobile-nav-toggle', open && 'open')}
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="mobile-menu-panel"
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>

      <div
        className={cn('mobile-nav-backdrop', open && 'open')}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <div
        id="mobile-menu-panel"
        className={cn('mobile-nav-panel', open && 'open')}
        role="dialog"
        aria-label="Mobile navigation"
        aria-hidden={!open}
      >
        <div className="mobile-nav-heading">
          <p>Menu</p>
        </div>
        <nav className="mobile-nav-links" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          className="button button-dark"
          href="/contact"
          onClick={() => setOpen(false)}
        >
          Book a consultation <ArrowUpRight size={16} />
        </a>
      </div>
    </>
  )
}
