import { useEffect, useState } from 'react'

import styles from './back-to-top.module.css'

const SCROLL_THRESHOLD = 300

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > SCROLL_THRESHOLD)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  if (!isVisible) {
    return null
  }

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      aria-label="Back to top"
      className={styles.button}
      onClick={handleClick}
    >
      <span aria-hidden>↑</span>
    </button>
  )
}

export { BackToTop }

