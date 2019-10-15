import NogAPI from '../nog-api'
import { AxiosResponse } from 'axios'

import { BasePage, DataPage } from '..'

export const INITIAL_WHOAREWE_STATE = {
  id: 0,
  institution: '',
  title: '',
  description: '',
  language: [],
  banner: [],
  _links: [],
} as Whoarewe

export interface Whoarewe extends BasePage {
  banner: DataPage[]
}

export const fetchWhoarewe = async (
  language: string,
  institution: string,
): Promise<Whoarewe> => {
  const response = (await NogAPI.get(
    `openarea/whoarewe/${language}/${institution}`,
  )) as AxiosResponse<Whoarewe>
  return response.data as Whoarewe
}
