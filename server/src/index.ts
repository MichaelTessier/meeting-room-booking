import app from './app'
import 'dotenv/config'
// require('dotenv').config();

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
