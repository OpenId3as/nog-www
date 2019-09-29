import React from 'react'
import Grid from '@material-ui/core/Grid'

import Carousel from '../../../components/Carousel/Carousel'
import useStyles from './Home.style'

import i1 from '../../../assets/images/dog1.jpg'
import i2 from '../../../assets/images/dog2.jpg'
import i3 from '../../../assets/images/dog3.jpg'
import i4 from '../../../assets/images/dog4.jpg'
import i5 from '../../../assets/images/dog5.jpg'
import i6 from '../../../assets/images/dog6.jpg'

const images = [i1, i2, i3, i4, i5, i6]

const Home = () => {
  const classes = useStyles()
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} className={classes.gridContainter}>
        <Carousel images={images} />
      </Grid>
    </Grid>
  )
}

export default Home
