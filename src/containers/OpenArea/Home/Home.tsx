import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'

import Carousel from '../../../components/Carousel/Carousel'
import useStyles from './Home.style'

import {
  fetchHome,
  DataPage,
  Home as HomeType,
  INITIAL_HOME_STATE as HomeInitialState
} from '../../../nog-api'

interface HomeProps {
  institution: string
  language: string
}

const Home = (props: HomeProps) => {
  const classes = useStyles()
  const [home, setHome] = useState<HomeType>(HomeInitialState)

  useEffect(() => {
    fetchHome(props.language, props.institution)
      .then(setHome)
  }, [])

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} className={classes.gridContainter}>
        <Carousel images={home.banner.map((banner: DataPage) => banner.image)} />
      </Grid>
    </Grid>
  )
}

export default Home
