import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'

import useStyles from './Contact.styles'

import {
  fetchContact,
  DataPage,
  Contact as ContactType,
  INITIAL_CONTACT_STATE as ContactInitialState
} from '../../../nog-api'

interface ContactProps {
  institution: string
  language: string
}

const Contact = (props: ContactProps) => {
  const classes = useStyles()
  const [contact, setContact] = useState<ContactType>(ContactInitialState)

  useEffect(() => {
    fetchContact(props.language, props.institution)
      .then(setContact)
  }, [])

  console.log(contact)
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} className={classes.gridContainter}>
        {contact.description}
      </Grid>
    </Grid>
  )
}

export default Contact
