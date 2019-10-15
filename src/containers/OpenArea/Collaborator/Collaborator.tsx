import React, { useEffect, useState } from 'react'

import Card from '../../../components/Card/Card'
import useStyles from './Collaborator.style'

import {
  fetchCollaborator,
  DataPage,
  Collaborator as CollaboratorType,
  INITIAL_COLLABORATOR_STATE as CollaboratorInitialState
} from '../../../nog-api'

interface CollaboratorProps {
  institution: string
  language: string
}

const Collaborator = (props: CollaboratorProps) => {
  const classes = useStyles()
  const [collaborator, setCollaborator] = useState<CollaboratorType>(CollaboratorInitialState)

  useEffect(() => {
    fetchCollaborator(props.language, props.institution)
      .then(setCollaborator)
  }, [])

  return (
    <div className={classes.container}>
      {collaborator.language.length > 0 &&
        collaborator.language[0].data.map((data: DataPage) => (
          <Card
            key={`collaborator-${data.title.split(' ').join('')}${data.text.split(' ').join('')}`}
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

export default Collaborator
