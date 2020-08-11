const mongoose = require('mongoose')
const dotEnv = require('dotenv')

dotEnv.config()

try {
  mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    bufferMaxEntries: 0
  })
} catch (error) {
  console.log(error)
}

module.exports = mongoose
