import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'

import Carousel from '../../../components/Carousel/Carousel'
import useStyles from './WhoAreWe.style'

import {
  fetchWhoarewe,
  DataPage,
  Whoarewe as WhoAreWeType,
  INITIAL_WHOAREWE_STATE as WhoAreWeInitialState
} from '../../../nog-api'

interface WhoAreWeProps {
  institution: string
  language: string
}

const WhoAreWe = (props: WhoAreWeProps) => {
  const classes = useStyles()
  const [whoAreWe, setWhoAreWe] = useState<WhoAreWeType>(WhoAreWeInitialState)

  useEffect(() => {
    fetchWhoarewe(props.language, props.institution)
      .then(setWhoAreWe)
  }, [])

  return (
    <Grid container className={classes.container}>
      <Grid item md={6} sm={12} className={classes.gridContainter}>
        {whoAreWe.description}
      </Grid>
      <Grid item md={6} sm={12} className={classes.gridContainter}>
        <Carousel images={whoAreWe.banner.map((banner: DataPage) => banner.image)} />
      </Grid>
    </Grid>
  )
}

export default WhoAreWe
