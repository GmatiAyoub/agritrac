import { useEffect, useRef } from 'react'

export default function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in')
          io.disconnect()
        }
      },
      { rootMargin: '-60px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return ref
}
