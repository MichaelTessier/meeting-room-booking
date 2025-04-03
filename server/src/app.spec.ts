import request from 'supertest'
import app from './app'
import { describe, it, expect } from 'vitest'

describe('app', () => {
  it('should return a not found message', async () => {
    const response = await request(app).get('/api/v1/not-found')
    expect(response.status).toBe(404)
    expect(response.body).toEqual({
      message: 'Not found - /api/v1/not-found',
      stack: expect.any(String),
    })
  })
})
