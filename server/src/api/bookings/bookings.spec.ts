import { describe, it, expect } from 'vitest'
import request from 'supertest'
import app from '@/app'

describe('API Booking', () => {
  describe('GET /api/v1/bookings', () => {
    it('should return a formatted bookings', async () => {
      const response = await request(app).get('/api/v1/bookings')
      expect(response.status).toBe(200)
      expect(response.body).toMatchSnapshot()
    })
  })

  describe('GET /api/v1/bookings/:id', () => {
    it('should return a formatted booking', async () => {
      const response = await request(app).get('/api/v1/bookings/1')
      expect(response.status).toBe(200)
      expect(response.body).toMatchSnapshot()
    })

    it('should return error if unknown id', async () => {
      const response = await request(app).get('/api/v1/bookings/qsdqs')
      expect(response.status).toBe(404)
    })
  })
})
