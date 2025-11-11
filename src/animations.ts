import { useEffect, type RefObject } from 'react'

/**
 * useIntersectionReveal
 * Adds reveal classes when elements enter viewport. Elements must have data-reveal attribute.
 * Respects prefers-reduced-motion: if reduced, reveal classes applied immediately (no animation).
 */
export function useIntersectionReveal(rootRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const elements = Array.from(root.querySelectorAll<HTMLElement>('[data-reveal]'))
    if (prefersReduced) {
      elements.forEach((el) => el.classList.add('reveal-visible'))
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.revealIndex || 0)
            // Stagger formula: 40ms base + index * 40ms capped at 400ms
            const delay = Math.min(40 + idx * 40, 400)
            ;(entry.target as HTMLElement).style.transitionDelay = `${delay}ms`
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -10% 0px',
      },
    )
    elements.forEach((el, i) => {
      el.dataset.revealIndex = String(i)
      observer.observe(el)
    })
    return () => observer.disconnect()
  }, [rootRef])
}

/**
 * useHeroParallax
 * Applies a subtle parallax transform to a target element based on scroll position.
 * Disabled when prefers-reduced-motion.
 */
export function useHeroParallax(targetRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const target = targetRef.current
    if (!target) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return
    const handle = () => {
      const y = window.scrollY
      const translate = Math.min(y * 0.18, 48)
      target.style.transform = `translateY(${translate}px)`
    }
    window.addEventListener('scroll', handle, { passive: true })
    handle()
    return () => window.removeEventListener('scroll', handle)
  }, [targetRef])
}

