import { describe, it, expect } from 'vitest'
import request from 'supertest'
import app from '../../app'
import data from '../../database/rooms.json'

describe('GET /api/v1/rooms', () => {
  it('should return a formatted rooms', async () => {
    const response = await request(app).get('/api/v1/rooms')
    expect(response.status).toBe(200)
    expect(response.body).toMatchSnapshot()
  })
})
