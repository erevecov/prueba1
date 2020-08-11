const { paymentValidation } = require('../validations/validations')
const Payment = require('../models/Payment')
const economicData = require('../utils/economicData')
const { v4: uuidv4 } = require('uuid')

const createPayment = async (req, res) => {
  try {
    let payload = req.body
    await paymentValidation.validateAsync(payload)

    const reqEconomicData = await economicData(payload.serviceHour)
    payload = { id: uuidv4(), ...reqEconomicData, ...payload }

    const newPayment = new Payment(payload)

    await newPayment.save()

    return res.status(201).send({ message: 'Payment created' })
  } catch (err) {
    console.log(err)
    return res.status(400).send(err)
  }
}

module.exports = createPayment
