import React, { useEffect, useState } from 'react'

import Card from '../../../components/Card/Card'
import useStyles from './Volunteer.style'

import {
  fetchVolunteer,
  DataPage,
  Volunteer as VolunteerType,
  INITIAL_VOLUNTEER_STATE as VolunteerInitialState
} from '../../../nog-api'

interface VolunteerProps {
  institution: string
  language: string
}

const Volunteer = (props: VolunteerProps) => {
  const classes = useStyles()
  const [volunteer, setVolunteer] = useState<VolunteerType>(VolunteerInitialState)

  useEffect(() => {
    fetchVolunteer(props.language, props.institution)
      .then(setVolunteer)
  }, [])

  return (
    <div className={classes.container}>
      {volunteer.language.length > 0 &&
        volunteer.language[0].data.map((data: DataPage) => (
          <Card
            key={`volunteer-${data.title.split(' ').join('')}${data.text.split(' ').join('')}`}
            title={data.title}
            subtitle={data.text}
            image={data.image}
            imageTitle={data.title}
          />
        ))
      }
    </div>
  )
}

export default Volunteer
