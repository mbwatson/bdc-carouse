import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { panelType } from './types'
import { CarouselPanel } from './panels'

const INTERVAL = 2000 // ms

const wrapperStyle = {
  border: '2px solid #456',
  margin: '1rem',
  padding: '1rem',
  minHeight: '400px',
  maxHeight: '400px',
  display: 'flex',
}

export const Carousel = ({ panels }) => {
  const [carouselIndex, setCarouselIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(
      () => setCarouselIndex((carouselIndex + 1) % panels.length),
      INTERVAL,
    )
    return () => clearInterval(timer)
  }, [carouselIndex])

  return (
    <div style={ wrapperStyle }>
      <CarouselPanel data={ panels[carouselIndex] } />
    </div>
  )
}

//

Carousel.propTypes = {
  panels: PropTypes.arrayOf(panelType)
}
