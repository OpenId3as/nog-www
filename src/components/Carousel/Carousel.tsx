import React from 'react'
import Slider, { Settings } from 'react-slick'
import { withStyles, WithStyles } from '@material-ui/core'

import styles from './Carousel.style'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './Carousel.css'

interface CarouselBaseProps {
  images: string[]
  settings?: Settings
}

type CarouselProps = CarouselBaseProps & WithStyles<typeof styles>

const Carousel = (props: CarouselProps): JSX.Element => {
  const { classes } = props

  const defaultSettings: Settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,

    // slidesToShow: 1,
    // slidesToScroll: 1
  }

  const settings = props.settings ? props.settings : defaultSettings

  return (
    <Slider {...settings}>
      {props.images.map((image: string, index: number) => (
        <div key={index} className={classes.imageContainer}>
          <img
            src={image}
            className={classes.image}
          ></img>
        </div>
      ))}
    </Slider>
  )
}

export default withStyles(styles)(Carousel)
