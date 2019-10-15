export interface BasePage {
  id: number
  institution: string
  title: string
  description: string
  language: Language[]
  _links: Link[]
}

interface Language {
  lang: string
  data: DataPage[]
}

export interface DataPage {
  image: string
  title: string
  text: string
}

export interface Link {
  method: string
  ref: string
  href: string
}
