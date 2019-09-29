import React from 'react'

import Card from '../../../components/Card/Card'
import useStyles from './Volunteer.style'

const Volunteer = () => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <Card
        title={'Marcelo Albuquerque'}
        subtitle={'CTO'}
        imageTitle={'Volunteer: Marcelo Albuquerque'}
      />
    </div>
  )
}

export default Volunteer
