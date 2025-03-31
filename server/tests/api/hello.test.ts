import request from 'supertest'
import app from '../../src/app'
import { describe, it, expect } from 'vitest'

describe('GET /api/v1/hello', () => {
  it('should return a greeting message', async () => {
    const response = await request(app).get('/api/v1/hello')
    expect(response.status).toBe(200)
    expect(response.body).toEqual({ message: 'Hello API' })
  })
})
