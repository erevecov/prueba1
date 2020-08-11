const mongoose = require('mongoose')

const Schema = mongoose.Schema

const paymentSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  description: { type: String, required: true },
  serviceHour: { type: Number, required: true },
  amountOfService: { type: Number, required: true },
  date: { type: String, required: true },
  dayAmountUf: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now() }
}, {
  versionKey: false
})

const Payment = mongoose.model('Payments', paymentSchema)

module.exports = Payment
