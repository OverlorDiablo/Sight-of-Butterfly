import React from 'react'
import { useLocation } from 'react-router'

type ScrollToTopProps = {
  children: JSX.Element
}

export const ScrollToTop: React.FC<ScrollToTopProps> = ({ children }) => {
  const { pathname } = useLocation()

  React.useEffect(() => {
    scrollTo(0, 0)
  }, [pathname])

  return children;
}