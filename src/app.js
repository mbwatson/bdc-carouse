import { Fragment } from 'react'
import { Carousel } from './components/carousel'

const carouselData = [
  {
    type: 'testimonial',
    content: {
      quote: 'Esse in veniam elit eu adipisicing ut elit dolor consequat in et laboris.',
      attribution: 'Alice Bob',
    },
  },
  {
    type: 'stats',
    content: {
      headline: 'Ut pariatur dolore do dolore',
      description: 'Irure in commodo ad voluptate non aliqua minim tempor qui officia ex laborum laboris officia magna duis consequat tempor.',
      stats: [
        {
          name: 'thing 1',
          value: 100
        },
        {
          name: 'thing 2',
          value: 200
        },
      ]
    },
  },
  {
    type: 'dataset-info',
    content: {
      headline: 'Adipisicing laboris culpa nulla',
      description: 'Aute aute labore nisi dolor proident est enim labore consectetur labore.',
      data: [
        {
          name: 'thing a',
          value: 100
        },
        {
          name: 'thing b',
          value: 200
        },
        {
          name: 'thing c',
          value: 300
        },
      ]
    }
  },
]

export const App = () => {
  return (
    <Fragment>
      <Carousel panels={ carouselData } />
    </Fragment>
  )
}
