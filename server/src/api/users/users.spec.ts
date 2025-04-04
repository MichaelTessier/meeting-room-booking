import { describe, it, expect } from 'vitest'
import request from 'supertest'
import app from '@/app'

describe('API User', () => {
  describe('GET /api/v1/users', () => {
    it('should return a formatted users', async () => {
      const response = await request(app).get('/api/v1/users')
      expect(response.status).toBe(200)
      expect(response.body).toMatchSnapshot()
    })
  })

  describe('GET /api/v1/users/:id', () => {
    it('should return a formatted user', async () => {
      const response = await request(app).get('/api/v1/users/1')
      expect(response.status).toBe(200)
      expect(response.body).toMatchSnapshot()
    })

    it('should return error if unknown id', async () => {
      const response = await request(app).get('/api/v1/users/qsdqs')
      expect(response.status).toBe(404)
    })
  })
})
