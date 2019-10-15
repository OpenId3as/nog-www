import NogAPI from '../nog-api'
import { AxiosResponse } from 'axios'

import { Link } from '..'

export const INITIAL_HOWTOHELP_STATE = {
  id: 0,
  institution: '',
  title: '',
  description: '',
  language: [],
  _links: [],
} as HowToHelp

export interface HowToHelp {
  id: number
  institution: string
  title: string
  description: string
  language: HowToHelpLanguage[]
  _links: Link[]
}

interface HowToHelpLanguage {
  lang: string
  data: HowToHelpData[]
}

export interface HowToHelpData {
  title: string
  text: string
}

export const fetchHowToHelp = async (
  language: string,
  institution: string,
): Promise<HowToHelp> => {
  const response = (await NogAPI.get(
    `openarea/howtohelp/${language}/${institution}`,
  )) as AxiosResponse<HowToHelp>
  return response.data as HowToHelp
}
