import React, { ChangeEvent, ReactNode } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import useStyles from './Tab.style'

interface SimpleTabsProps {
  children?: ReactNode
  tabs: Array<string>
  onChange: (event: ChangeEvent<{}>, newValue: number) => void
  value: number
}

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const SimpleTabs = (props: SimpleTabsProps) => {
  const classes = useStyles(props)
  return (
    <div className={classes.root}>
      <AppBar position='static' color='default'>
        <Tabs
          value={props.value}
          onChange={props.onChange}
          aria-label='tabs'
          indicatorColor='primary'
          textColor='primary'
          variant="scrollable"
          scrollButtons="auto"
        >
          {props.tabs.map((value: string, index: number) => (
            <Tab key={value} label={value} {...a11yProps(index)} />
          ))}
        </Tabs>
      </AppBar>
      {props.children}
    </div>
  )
}

export default SimpleTabs
