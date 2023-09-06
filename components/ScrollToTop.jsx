'use client'


import { useEffect, useState } from 'react'
import { BiArrowFromBottom } from 'react-icons/bi'

import { classNames } from '../utils/classnames'

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <div className="fixed bottom-12 right-12 z-20">
      <button
        type="button"
        onClick={scrollToTop}
        className={classNames(
          isVisible ? 'opacity-100' : 'opacity-0',
          'bg-secondary-white hover:bg-primary-blue focus:ring-blue-950 inline-flex items-center rounded-full p-3 text-black shadow-sm transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2'
        )}
      >
        <BiArrowFromBottom className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  )
}