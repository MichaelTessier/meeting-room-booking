import { describe, it, expect } from 'vitest'
import request from 'supertest'
import app from '@/app'

describe('API Rooms', () => {
  describe('GET /api/v1/rooms', () => {
    it('should return a formatted rooms', async () => {
      const response = await request(app).get('/api/v1/rooms')
      expect(response.status).toBe(200)
      expect(response.body).toMatchSnapshot()
    })
  })

  describe('GET /api/v1/rooms/:slug', () => {
    it('should return a formatted room', async () => {
      const response = await request(app).get('/api/v1/rooms/salle-1')
      expect(response.status).toBe(200)
      expect(response.body).toMatchSnapshot()
    })

    it('should return error if unknown slug', async () => {
      const response = await request(app).get('/api/v1/rooms/qsdqs')
      expect(response.status).toBe(404)
    })
  })
})
