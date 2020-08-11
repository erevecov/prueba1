/* eslint-env jest */

const app = require('../index')
const supertest = require('supertest')
const request = supertest(app)
const mongoDB = require('./testConfig/database')

describe('Test update payments', () => {
  beforeAll(() => {
    mongoDB.connect()
  })

  afterAll((done) => {
    mongoDB.disconnect(done)
  })

  it('get an error when trying to update a non-existent payment', async () => {
    const response = await request.put('/api/payments/123', {
      name: 'Lewis',
      lastName: 'Carton',
      description: 'payment 1st quote',
      serviceHour: '2.0'
    })

    expect(response.status).toBe(400)
  })
})
