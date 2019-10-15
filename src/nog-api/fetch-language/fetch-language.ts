import NogAPI from '../nog-api'
import { AxiosResponse } from 'axios'

import { Link } from '..'

export const INITIAL_LANGUAGE_STATE = {
  id: 0,
  lang: '',
  data: {
    footer: {
      providedFor: '',
      reservedRights: '',
    },
    header: {
      hello: '',
      title: '',
      welcome: '',
      loginButton: '',
    },
    validation: {},
  },
  _links: [],
} as Language

export interface Language {
  id: number
  lang: string
  data: DataLabels
  _links: Link[]
}

interface DataLabels {
  footer: FooterLabels
  header: HeaderLabels
  validation: ValidationLabels
}

interface FooterLabels {
  providedFor: string
  reservedRights: string
}

interface HeaderLabels {
  hello: string
  title: string
  welcome: string
  loginButton: string
}

interface ValidationLabels {}

export const fetchLanguage = async (language: string): Promise<Language> => {
  const response = (await NogAPI.get(
    `openarea/language/${language}`,
  )) as AxiosResponse<Language>
  return response.data as Language
}
