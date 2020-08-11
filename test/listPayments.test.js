/* eslint-env jest */
const app = require('../index')
const supertest = require('supertest')
const request = supertest(app)
const mongoDB = require('./testConfig/database')

jest.setTimeout(30000)

describe('Test list Payments', () => {
  beforeAll(() => {
    mongoDB.connect()
  })

  afterAll((done) => {
    mongoDB.disconnect(done)
  })

  it('get existent payments', async () => {
    const response = await request.get('/api/payments')

    expect(response.status).toBe(200)
    expect(typeof response.body).toBe('object')
  })
})
