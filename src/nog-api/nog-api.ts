/* eslint no-undef: 0 */
import axios, { AxiosRequestConfig } from 'axios'

const baseURL = process.env.REACT_APP_API

export const config = {
  baseURL,
} as AxiosRequestConfig

const NogAPI = axios.create(config)

export default NogAPI
