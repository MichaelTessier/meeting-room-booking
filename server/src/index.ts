import app from './app'
import 'dotenv/config'

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.info(`Server is running on port ${PORT}`)
})
