import React from 'react'
import MediaQuery, { useMediaQuery } from 'react-responsive'

const Responsive = {
  Default: (props: typeof MediaQuery) => <MediaQuery {...props} maxWidth={BREAK_POINT - 1} />,
  Desktop: (props: typeof MediaQuery) => <MediaQuery {...props} minWidth={BREAK_POINT} />,
}

export const useResponsive = () => {
  const isMobile = useMediaQuery({ maxWidth: BREAK_POINT - 1 })
  const isDesktop = useMediaQuery({ minWidth: BREAK_POINT })

  return {
    isMobile,
    isDesktop,
  }
}

export const BREAK_POINT = 992
export const BREAK_POINT_TABLET = 768
export default Responsive
