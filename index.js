const express = require('express')
const rateLimit = require('express-rate-limit')
const dotEnv = require('dotenv')
const profile = require('./handlers/profile')
const createPayment = require('./handlers/createPayment')
const getPayment = require('./handlers/getPayment')
const listPayments = require('./handlers/listPayments')
const deletePayment = require('./handlers/deletePayment')
const updatePayment = require('./handlers/updatePayment')
require('./config/database')
dotEnv.config()

const port = process.env.PORT || 3000
const app = express()

const apiLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 10,
  message: 'Too many accounts created from this IP, please try again after 10 minutes'
})

app.use('/api/', apiLimiter)
app.use(express.json())

app.get('/', profile)
app.get('/api/payments/:id', getPayment)
app.get('/api/payments', listPayments)
app.post('/api/payments', createPayment)
app.delete('/api/payments/:id', deletePayment)
app.put('/api/payments/:id', updatePayment)

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`App listening at port: ${port}`)
  })
}

module.exports = app
