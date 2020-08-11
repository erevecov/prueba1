const axios = require('axios')
const moment = require('moment')

const economicData = async (hours = 0) => {
  try {
    const date = moment()
    const [dateUf, dateIso] = [date.format('DD-MM-YYYY'), date.format('YYYY-MM-DDTHH:mm:ss.SSSZ')]
    const res = await axios.get(`https://mindicador.cl/api/uf/${dateUf}`)

    return {
      date: dateIso,
      dayAmountUf: res.data.serie[0].valor,
      amountOfService: res.data.serie[0].valor * hours
    }
  } catch (error) {
    console.log(error)
    throw error
  }
}

module.exports = economicData
