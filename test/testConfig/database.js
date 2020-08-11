const mongoose = require('mongoose')
const dotEnv = require('dotenv')

dotEnv.config()

module.exports = {
  mongoose,
  connect: () => {
    mongoose.Promise = Promise
    mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      bufferMaxEntries: 0
    })
  },
  disconnect: done => {
    mongoose.disconnect(done)
  }
}
