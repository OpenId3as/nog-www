import NogAPI from '../nog-api'
import { AxiosResponse } from 'axios'

import {
    Collaborator,
    Contact,
    Home,
    HowToHelp,
    Language,
    Link,
    Logo,
    Menu,
    Volunteer,
    Whoarewe,
} from '..'

interface OpenArea {
    language: Language
    logo: Logo
    menu: Menu
    home: Home
    whoAreWe: Whoarewe
    howToHelp: HowToHelp
    contact: Contact
    collaborator: Collaborator
    volunteer: Volunteer
    _links: Link[]
}

export const fetchOpenArea = async (language: string, institution: string): Promise<OpenArea> => {
    const response = (await NogAPI.get(
        `openarea/${language}/${institution}`,
    )) as AxiosResponse<OpenArea>
    return response.data as OpenArea
}
