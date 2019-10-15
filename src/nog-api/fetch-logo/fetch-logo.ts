import NogAPI from '../nog-api'
import { AxiosResponse } from 'axios'

import { DataPage, Link } from '..'

export const INITIAL_LOGO_STATE = {
  id: 0,
  institution: '',
  data: {
    image: '',
    text: '',
    title: '',
  },
  _links: [],
} as Logo

export interface Logo {
  id: number
  institution: string
  data: DataPage
  _links: Link[]
}

export const fetchLogo = async (institution: string): Promise<Logo> => {
  const response = (await NogAPI.get(
    `openarea/logo/${institution}`,
  )) as AxiosResponse<Logo>
  return response.data as Logo
}
