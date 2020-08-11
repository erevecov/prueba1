/* eslint-env jest */

const app = require('../index')
const supertest = require('supertest')
const request = supertest(app)
const mongoDB = require('./testConfig/database')

jest.setTimeout(30000)

describe('Test delete Payment', () => {
  beforeAll(() => {
    mongoDB.connect()
  })

  afterAll((done) => {
    mongoDB.disconnect(done)
  })

  it('get an error trying to delete non-existent payment', async () => {
    const response = await request.delete('/api/payments/123')

    expect(response.status).toBe(404)
    expect(response.body.error).toBe('not found')
  })
})
