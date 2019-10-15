import NogAPI from '../nog-api'
import { AxiosResponse } from 'axios'

import { Link } from '..'

export interface Menu {
  id: number
  institution: string
  style: Style
  menuItems: MenuItems[]
  _links: Link[]
}

interface MenuItems {
  lang: string
  menuDetails: MenuDetails[]
}

interface MenuDetails {
  title: string
  route: string
  order: number
}

interface Style {
  background: string
  fontColor: string
  secondaryFontColor: string
}

export const fetchMenuDetails = async (
  language: string,
  institution: string,
): Promise<string[]> => {
  const menu = await fetchMenu(language, institution)
  return !!menu
    ? menu.menuItems[0].menuDetails.map(
        (value: { title: string; route: string }) => value.title,
      )
    : []
}

export const fetchMenu = async (
  language: string,
  institution: string,
): Promise<Menu> => {
  const response = (await NogAPI.get(
    `openarea/menu/${language}/${institution}`,
  )) as AxiosResponse<Menu>
  return response.data as Menu
}
