import React, { ChangeEvent, useState, useEffect } from 'react'
import { useMediaQuery } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import {
  Logo,
  Tab,
  TabPanel,
  Toolbar,
  Drawer,
  Progress,
} from '../../components'

import {
  Collaborator,
  Contact,
  Home,
  HowToHelp,
  NotFound,
  Volunteer,
  WhoAreWe
} from '../OpenArea'
import useStyles from './OpenArea.style'

import {
  Language as LanguageType,
  INITIAL_LANGUAGE_STATE as LanguageInitialState,
  Logo as LogoType,
  INITIAL_LOGO_STATE as LogoInitialState
} from '../../nog-api'

import { fetchLanguage, fetchLogo, fetchMenuDetails } from '../../nog-api/'

import brFlag from '../../assets/images/flag-br.png'
import usaFlag from '../../assets/images/flag-usa.png'
import spainFlag from '../../assets/images/flag-spain.png'

enum LanguageEnum {
  Portuguese = 'pt-br',
  English = 'en-us',
  Spanish = 'sp',
}

const OpenArea = () => {
  const classes = useStyles()
  const isMobile = useMediaQuery('(max-width: 959px)')

  const institution = !!window.location.pathname.split('/')[1] ? window.location.pathname.split('/')[1] : '-'
  const [tabValue, setTabValue] = useState(0)
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageEnum>(LanguageEnum.Portuguese)
  const [language, setLanguage] = useState<LanguageType>(LanguageInitialState)
  const [logo, setLogo] = useState<LogoType>(LogoInitialState)
  const [menu, setMenu] = useState<string[] | undefined>(undefined)
  const [currentMenu, setCurrentMenu] = useState<string>('')
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    fetchMenuDetails(selectedLanguage, institution)
      .then(setMenu)
      .catch(_ => !menu && setError(true))
    fetchLanguage(selectedLanguage)
      .then(setLanguage)
    fetchLogo(institution)
      .then(setLogo)
  }, [selectedLanguage])

  useEffect(() => {
    if (language.id !== 0) {
      document.title = language.data.header.title
    }
  }, [language])

  useEffect(() => {
    if (!!menu) {
      setCurrentMenu(!!menu ? menu[0] : '')
    }
  }, [menu])

  const handleTabChange = (event: ChangeEvent<{}>, newValue: number) => {
    setTabValue(newValue)
    setCurrentMenu(!!menu ? menu[newValue] : '')
  }

  const handleDrawerMenuChange = (newValue: number) => {
    setTabValue(newValue)
    setCurrentMenu(!!menu ? menu[newValue] : '')
  }

  const handleLanguageChange = (language: LanguageEnum) => {
    setSelectedLanguage(language)
  }

  if (error) {
    return <NotFound />
  }

  if (!menu) {
    return <Progress />
  }

  return (
    <div className={classes.container}>
      <CssBaseline />
      <Container maxWidth='lg'>
        <Toolbar divider justify="space-between">
          <div className={classes.toolbarLogo}>
            <Logo src={logo.data.image} onClick={() => setTabValue(0)} />
          </div>
          <div className={classes.toolbarButtons}>
            <div className={classes.loginButton}>
              <Button variant='outlined' size='small'>
                {language.data.header.loginButton}
              </Button>
            </div>
            <div className={classes.languageAndHamburgerSection}>
              {isMobile && (
                <Drawer onClick={handleDrawerMenuChange} items={menu} value={tabValue}>
                  <ListItem button key={'list-login'}>
                    <ListItemText primary={language.data.header.loginButton} />
                  </ListItem>
                </Drawer>
              )}
              <div className={classes.languageSection}>
                {selectedLanguage !== LanguageEnum.Portuguese && (
                  <div className={classes.flag}>
                    <img style={{ cursor: 'pointer' }} alt="br" onClick={() => handleLanguageChange(LanguageEnum.Portuguese)} src={brFlag} />
                  </div>
                )}
                {selectedLanguage !== LanguageEnum.Spanish && (
                  <div className={classes.flag}>
                    <img style={{ cursor: 'pointer' }} alt="sp" onClick={() => handleLanguageChange(LanguageEnum.Spanish)} src={spainFlag} />
                  </div>
                )}
                {selectedLanguage !== LanguageEnum.English && (
                  <div className={classes.flag}>
                    <img style={{ cursor: 'pointer' }} alt="usa" onClick={() => handleLanguageChange(LanguageEnum.English)} src={usaFlag} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </Toolbar>
        {isMobile && (
          <div className={classes.mobileCurrentMenu}>
            {currentMenu}
          </div>
        )}
        {!isMobile && (
          <Tab onChange={handleTabChange} tabs={menu} value={tabValue} />
        )}
        <main>
          <TabPanel value={tabValue} index={0}>
            <Home institution={institution} language={selectedLanguage} />
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            <WhoAreWe institution={institution} language={selectedLanguage} />
          </TabPanel>
          <TabPanel value={tabValue} index={2}>
            <HowToHelp institution={institution} language={selectedLanguage} />
          </TabPanel>
          <TabPanel value={tabValue} index={3}>
            <Contact institution={institution} language={selectedLanguage} />
          </TabPanel>
          <TabPanel value={tabValue} index={4}>
            <Collaborator institution={institution} language={selectedLanguage} />
          </TabPanel>
          <TabPanel value={tabValue} index={5}>
            <Volunteer institution={institution} language={selectedLanguage} />
          </TabPanel>
        </main>
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth='lg'>
          <Typography
            variant='subtitle1'
            align='center'
            color='textSecondary'
            component='p'
          >
            {language.data.footer.reservedRights}
          </Typography>
          <Typography variant='body2' color='textSecondary' align='center'>
            {language.data.footer.providedFor}
          </Typography>
        </Container>
      </footer>
    </div>
  )
}

export default OpenArea
