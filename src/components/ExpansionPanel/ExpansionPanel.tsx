import React, { ChangeEvent, useState } from 'react'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import useStyles from './ExpansionPanel.style'

interface ExpansionPanelProps {
  items: ExpansionItem[]
}

export interface ExpansionItem {
  heading: string
  details: string | JSX.Element
}

const ControlledExpansionPanels = (props: ExpansionPanelProps) => {
  const classes = useStyles(props)
  const [expanded, setExpanded] = useState<string | false>(false)

  const handleChange = (panel: string) => (
    event: ChangeEvent<{}>,
    isExpanded: boolean,
  ) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <div className={classes.root}>
      {props.items.map((value: ExpansionItem, index: number) => (
        <ExpansionPanel
          style={{ display: 'block' }}
          key={`panel${index}`}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}bh-content`}
            id={`panel${index}bh-header`}
          >
            <Typography className={classes.heading}>{value.heading}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>{value.details}</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </div>
  )
}

export default ControlledExpansionPanels
