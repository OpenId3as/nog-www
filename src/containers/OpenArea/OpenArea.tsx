import React, { ChangeEvent, useState } from 'react'
import { useMediaQuery } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Logo from '../../components/Logo/Logo'
import Tab from '../../components/Navigation/Tabs/Tab/Tab'
import TabPanel from '../../components/Navigation/Tabs/TabPanel/TabPanel'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import Drawer from '../../components/Navigation/Drawer/Drawer'

import Collaborator from '../OpenArea/Collaborator/Collaborator'
import Contact from '../OpenArea/Contact/Contact'
import Home from '../OpenArea/Home/Home'
import HowToHelp from '../OpenArea/HowToHelp/HowToHelp'
import Volunteer from '../OpenArea/Volunteer/Volunteer'
import WhoAreWe from '../OpenArea/WhoAreWe/WhoAreWe'

import useStyles from './OpenArea.style'

import logoTest from '../../assets/openId3as.png'
import brFlag from '../../assets/images/flag-br.png'
import usaFlag from '../../assets/images/flag-usa.png'
import spainFlag from '../../assets/images/flag-spain.png'

const MadeWithLove = () => {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Built with love by the '}
      <Link color='inherit' href='https://material-ui.com/'>
        Material-UI
      </Link>
      {' team.'}
    </Typography>
  )
}

const tabs = [
  'Home',
  'Quem Somos',
  'Como Ajudar',
  'Contato',
  'Colaboradores',
  'Voluntários',
]

type Language = 'pt-br' | 'en-us' | 'sp'

const OpenArea = () => {
  const classes = useStyles()
  const isMobile = useMediaQuery('(max-width: 959px)')
  // document.title = 'test'

  const [tabValue, setTabValue] = useState(0)
  const [language, setLanguage] = useState<Language>('pt-br')

  const handleTabChange = (event: ChangeEvent<{}>, newValue: number) => {
    setTabValue(newValue)
  }

  const handleDrawerMenuChange = (newValue: number) => {
    setTabValue(newValue)
  }

  const handleLanguageChange = (language: Language) => {
    setLanguage(language)
  }

  return (
    <div className={classes.container}>
      <CssBaseline />
      <Container maxWidth='lg'>
        <Toolbar divider justify="space-between">
          <div className={classes.toolbarLogo}>
            <Logo src={logoTest} onClick={() => setTabValue(0)} />
          </div>
          <div className={classes.toolbarButtons}>
            <div className={classes.loginButton}>
              <Button variant='outlined' size='small'>
                Sign up / Login
              </Button>
            </div>
            <div className={classes.languageAndHamburgerSection}>
              {isMobile && (
                <Drawer onClick={handleDrawerMenuChange} items={tabs} value={tabValue}>
                  <ListItem button key={'list-login'}>
                    <ListItemText primary={'Sign up / Login'} />
                  </ListItem>
                </Drawer>
              )}
              <div className={classes.languageSection}>
                {language !== 'pt-br' && (
                  <div className={classes.flag}>
                    <img style={{ cursor: 'pointer' }} alt="br" onClick={() => handleLanguageChange('pt-br')} src={brFlag} />
                  </div>
                )}
                {language !== 'sp' && (
                  <div className={classes.flag}>
                    <img style={{ cursor: 'pointer' }} alt="sp" onClick={() => handleLanguageChange('sp')} src={spainFlag} />
                  </div>
                )}
                {language !== 'en-us' && (
                  <div className={classes.flag}>
                    <img style={{ cursor: 'pointer' }} alt="usa" onClick={() => handleLanguageChange('en-us')} src={usaFlag} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </Toolbar>
        {!isMobile && (
          <Tab onChange={handleTabChange} tabs={tabs} value={tabValue} />
        )}
        <main>
          <TabPanel value={tabValue} index={0}>
            <Home />
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            <WhoAreWe />
          </TabPanel>
          <TabPanel value={tabValue} index={2}>
            <HowToHelp />
          </TabPanel>
          <TabPanel value={tabValue} index={3}>
            <Contact />
          </TabPanel>
          <TabPanel value={tabValue} index={4}>
            <Collaborator />
          </TabPanel>
          <TabPanel value={tabValue} index={5}>
            <Volunteer />
          </TabPanel>
        </main>
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth='lg'>
          <Typography variant='h6' align='center' gutterBottom>
            Footer
          </Typography>
          <Typography
            variant='subtitle1'
            align='center'
            color='textSecondary'
            component='p'
          >
            Something here to give the footer a purpose!
          </Typography>
          <MadeWithLove />
        </Container>
      </footer>
    </div>
  )
}

export default OpenArea
