import React from 'react'

import { TabPanel } from '../../../components'
import {
    Collaborator,
    Contact,
    Home,
    HowToHelp,
    NotFound,
    Volunteer,
    WhoAreWe
} from '..'

interface ContentProps {
    institution: string
    selectedLanguage: string
    tabValue: number
}

const Content = (props: ContentProps) => {
    const { institution, selectedLanguage, tabValue } = props
    return (
        <>
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
        </>
    )
}

export default Content
