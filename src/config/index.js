const globalConfig = {
  DEV: {
    url: 'http://localhost:4000'
  },
  PRODUCTION: {
    url: process.env.REACT_APP_URL
  }
}
const MODE_CONFIG =
  process.env.REACT_APP_NODE_ENV === 'PRODUCTION' ? 'PRODUCTION' : 'DEV'

export default globalConfig[MODE_CONFIG]
