import express from 'express'
import { User } from 'meeting-room-booking-types'
// import { formatRoom } from './formatters'
import type { ApiResponse } from '@/types'
import { fetchUser, fetchUsers } from '@/database/users'

const router = express.Router()

router.get<{}, ApiResponse<User[]>>('/', async (req, res) => {
  try {
    const response = await fetchUsers()

    if (!response) {
      res.status(404).json({ message: 'Users not found' })
    } else {
      // const users = response.map(formatUser)

      res.json(response)
    }
  } catch (error) {
    res.status(500).json({ message: 'Error when fetching users' })
  }
})

router.get<{ id: string }, ApiResponse<User>>('/:id', async (req, res) => {
  try {
    const response = await fetchUser(req.params.id)

    if (!response) {
      res.status(404).json({ message: 'User not found' })
    } else {
      // const room = formatRoom(response)
      res.json(response)
    }
  } catch (error) {
    res.status(500).json({ message: 'Error when fetching user' })
  }
})

export default router
