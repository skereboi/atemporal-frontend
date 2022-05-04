const globalConfig = {
  DEV: {
    url: 'http://localhost:4000'
  },
  PRODUCTION: {
    url: 'https://dry-plateau-91665.herokuapp.com'
  }
}
const MODE_CONFIG =
  process.env.NODE_ENV === 'PRODUCTION' ? 'PRODUCTION' : 'DEV'

export default globalConfig[MODE_CONFIG]
