const { paymentValidation } = require('../validations/validations')
const economicData = require('../utils/economicData')
const Payment = require('../models/Payment')

const updatePayment = async (req, res) => {
  try {
    const payload = req.body
    await paymentValidation.validateAsync(payload)

    const findPayment = await Payment.findOne()
      .where('id')
      .eq(req.params.id)
      .exec()

    if (findPayment) {
      const reqEconomicData = await economicData(payload.serviceHour)

      findPayment.name = payload.name
      findPayment.lastName = payload.lastName
      findPayment.description = payload.description
      findPayment.serviceHour = payload.serviceHour
      findPayment.amountOfService = reqEconomicData.amountOfService
      findPayment.date = reqEconomicData.date
      findPayment.dayAmountUf = reqEconomicData.dayAmountUf

      await findPayment.save()

      return res.status(200).send({ message: 'Payment updated successfully' })
    }

    return res.status(404).send({ error: 'not found' })
  } catch (err) {
    console.log(err)
    return res.status(400).send(err)
  }
}

module.exports = updatePayment
