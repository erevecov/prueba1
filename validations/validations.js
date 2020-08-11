const Joi = require('joi')

const paymentValidation = Joi.object({
  // id: Joi.string().required(),
  name: Joi.string().required(),
  lastName: Joi.string().required(),
  description: Joi.string().required(),
  serviceHour: Joi.number().required()
  // amountOfService: Joi.number().required(),
  // date: Joi.string().required(),
  // dayAmountUf: Joi.number().required()
})

module.exports = {
  paymentValidation
}
