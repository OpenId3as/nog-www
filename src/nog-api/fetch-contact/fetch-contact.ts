import NogAPI from '../nog-api'
import { AxiosResponse } from 'axios'

import { BasePage } from '..'

export const INITIAL_CONTACT_STATE = {
  id: 0,
  institution: '',
  title: '',
  description: '',
  language: [],
  _links: [],
} as Contact

export interface Contact extends BasePage {}

export const fetchContact = async (
  language: string,
  institution: string,
): Promise<Contact> => {
  const response = (await NogAPI.get(
    `openarea/contact/${language}/${institution}`,
  )) as AxiosResponse<Contact>
  return response.data as Contact
}
