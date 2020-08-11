const Payment = require('../models/Payment')

const getPayment = async (req, res) => {
  try {
    const findPayment = await Payment.find({
      id: req.params.id
    })

    if (findPayment[0]) {
      return res.status(200).send(findPayment[0])
    }

    return res.status(404).send({ error: 'not found' })
  } catch (err) {
    console.log(err)
    return res.status(400).send({ error: 'bad request' })
  }
}

module.exports = getPayment
