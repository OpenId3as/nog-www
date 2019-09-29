/* eslint no-undef: 0 */
export const isCi = !!process.env.REACT_APP_CI

/** Environment Variable used to avoid  */
export const isDevelopment = process.env.NODE_ENV === 'development'

/** Environment Variable used to avoid performing integrations */
export const shouldMockIntegrations =
  process.env.REACT_APP_MOCK_INTEGRATIONS === 'true'
