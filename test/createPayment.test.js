/* eslint-env jest */

const app = require('../index')
const supertest = require('supertest')
const request = supertest(app)
const mongoDB = require('./testConfig/database')

jest.setTimeout(30000)

describe('Test create Payment', () => {
  beforeAll(() => {
    mongoDB.connect()
  })

  afterAll((done) => {
    mongoDB.disconnect(done)
  })

  it('get validation error for not sending name', async () => {
    const response = await request.post('/api/payments', {
      lastName: 'Carton',
      description: 'payment 1st quote',
      serviceHour: '2.0'
    })

    expect(response.status).toBe(400)
  })
})
