import { Fragment } from 'react'
import PropTypes from 'prop-types'

export const Carousel = ({ data }) => {
  return (
    <Fragment>
      <h1>carousel!</h1>
      <pre>{ JSON.stringify(data, null, 2) }</pre>
    </Fragment>
  )
}

//

const testomonialType = PropTypes.shape({
  quote: PropTypes.string.isRequired,
  attribution: PropTypes.string.isRequired,
})

const statsType = PropTypes.shape({
  headline: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
})

const datasetInfoType = PropTypes.shape({
  headline: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
})

Carousel.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf([
        'testimonial', 'stats', 'dataset-info'
      ]),
      content: PropTypes.oneOfType([
        testomonialType, statsType, datasetInfoType
      ]).isRequired,
    })
  )
}
