import React from 'react'

import Card from '../../../components/Card/Card'
import useStyles from './Collaborator.style'

const Collaborator = () => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <Card
        title={'Marcelo Albuquerque'}
        subtitle={'CTO'}
        imageTitle={'Collaborator: Marcelo'}
      />
      <Card
        title={'Samara Justino'}
        subtitle={'CTO'}
        imageTitle={'Collaborator: Samara'}
      />
      <Card
        title={'Marcelo Albuquerque'}
        subtitle={'CTO'}
        imageTitle={'Collaborator: Marcelo'}
      />
      <Card
        title={'Samara Justino'}
        subtitle={'CTO'}
        imageTitle={'Collaborator: Samara'}
      />
      <Card
        title={'Marcelo Albuquerque'}
        subtitle={'CTO'}
        imageTitle={'Collaborator: Marcelo'}
      />
      <Card
        title={'Samara Justino'}
        subtitle={'CTO'}
        imageTitle={'Collaborator: Samara'}
      />
    </div>
  )
}

export default Collaborator
