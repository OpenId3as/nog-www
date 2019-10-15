import NogAPI from '../nog-api'
import { AxiosResponse } from 'axios'

import { BasePage } from '..'

export const INITIAL_VOLUNTEER_STATE = {
  id: 0,
  institution: '',
  title: '',
  description: '',
  language: [],
  _links: [],
} as Volunteer

export interface Volunteer extends BasePage {}

export const fetchVolunteer = async (
  language: string,
  institution: string,
): Promise<Volunteer> => {
  const response = (await NogAPI.get(
    `openarea/volunteer/${language}/${institution}`,
  )) as AxiosResponse<Volunteer>
  return response.data as Volunteer
}
