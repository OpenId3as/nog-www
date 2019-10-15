import NogAPI from '../nog-api'
import { AxiosResponse } from 'axios'

import { BasePage, DataPage } from '..'

export const INITIAL_HOME_STATE = {
  id: 0,
  institution: '',
  title: '',
  description: '',
  language: [],
  banner: [],
  _links: [],
} as Home

export interface Home extends BasePage {
  banner: DataPage[]
}

export const fetchHome = async (
  language: string,
  institution: string,
): Promise<Home> => {
  const response = (await NogAPI.get(
    `openarea/home/${language}/${institution}`,
  )) as AxiosResponse<Home>
  return response.data as Home
}
