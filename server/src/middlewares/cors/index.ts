import cors from 'cors'

const authorizedOrigins = ['localhost:5173']

export const corsMiddleware = () =>
  cors({
    credentials: true,
    origin: (origin, callback) => {
      console.log(`origin: ${origin}`)
      if (process.env.NODE_ENV === 'test') {
        return callback(null, true)
      }

      const { host } = new URL(origin as string)

      if (authorizedOrigins.includes(host)) {
        return callback(null, true)
      }

      return callback(new Error('Not allowed by CORS'))
    },
  })
