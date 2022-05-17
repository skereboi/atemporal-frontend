const globalConfig = {
  DEV: {
    url: 'http://localhost:4000'
  },
  PRODUCTION: {
    url: 'https://atemporal-backend-3lcft8473-danielcusanchez.vercel.app/'
  }
}
const MODE_CONFIG =
  process.env.NODE_ENV === 'PRODUCTION' ? 'PRODUCTION' : 'DEV'

export default globalConfig[MODE_CONFIG]
