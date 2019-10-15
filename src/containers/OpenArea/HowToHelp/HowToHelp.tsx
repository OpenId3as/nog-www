import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'

import ExpansionPanel, {
  ExpansionItem,
} from '../../../components/ExpansionPanel/ExpansionPanel'
import useStyles from './HowToHelp.style'

import {
  fetchHowToHelp,
  HowToHelp as HowToHelpType,
  HowToHelpData as HowToHelpDataType,
  INITIAL_HOWTOHELP_STATE as HowToHelpInitialState
} from '../../../nog-api'

interface HowToHelpProps {
  institution: string
  language: string
}

const HowToHelp = (props: HowToHelpProps) => {
  const classes = useStyles()
  const [howToHelp, setHowToHelp] = useState<HowToHelpType>(HowToHelpInitialState)

  useEffect(() => {
    fetchHowToHelp(props.language, props.institution)
      .then(setHowToHelp)
  }, [])

  return (
    <Grid container className={classes.container}>
      <Grid item md={6} sm={12} className={classes.gridContainter}>
        {howToHelp.description}
      </Grid>
      <Grid item md={6} sm={12} className={classes.gridContainter}>
        {howToHelp.language.length > 0 && (
          <ExpansionPanel
            items={
              howToHelp.language[0]
                .data.map((data: HowToHelpDataType) => {
                  return { heading: data.title, details: data.text } as ExpansionItem
                })
            }
          />
        )}
      </Grid>
    </Grid>
  )
}

export default HowToHelp
