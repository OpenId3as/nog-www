import NogAPI from '../nog-api'
import { AxiosResponse } from 'axios'

import { BasePage } from '..'

export const INITIAL_COLLABORATOR_STATE = {
  id: 0,
  institution: '',
  title: '',
  description: '',
  language: [],
  _links: [],
} as Collaborator

export interface Collaborator extends BasePage {}

export const fetchCollaborator = async (
  language: string,
  institution: string,
): Promise<Collaborator> => {
  const response = (await NogAPI.get(
    `openarea/collaborator/${language}/${institution}`,
  )) as AxiosResponse<Collaborator>
  return response.data as Collaborator
}
