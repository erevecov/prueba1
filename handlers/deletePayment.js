const Payment = require('../models/Payment')

const deletePayment = async (req, res) => {
  try {
    const findPayment = await Payment.find({
      id: req.params.id
    })

    if (findPayment[0]) {
      await findPayment[0].deleteOne()

      return res.status(200).send({ message: 'Payment deleted successfully' })
    }

    return res.status(404).send({ error: 'not found' })
  } catch (err) {
    console.log(err)
    return res.status(400).send({ error: 'bad request' })
  }
}

module.exports = deletePayment
