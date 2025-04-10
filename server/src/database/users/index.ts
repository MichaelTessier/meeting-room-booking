import fs from 'node:fs/promises'
import { User } from 'meeting-room-booking-types'

const USERS_URL = 'src/database/users/users.json'

export const fetchUsers = async (): Promise<User[] | undefined> => {
  try {
    const usersDataString = await fs.readFile(USERS_URL, 'utf-8')
    const usersData = JSON.parse(usersDataString) as { users: User[] }

    if (!usersData) return []

    return usersData.users
  } catch (error) {
    throw new Error('Error fetching users')
  }
}

export const fetchUser = async (id: string) => {
  try {
    if (!id) {
      throw new Error('User ID is required')
    }

    const users = await fetchUsers()

    if (!users) return undefined

    const user = users.find((user) => user.id === id)

    return user
  } catch (error) {
    throw new Error('Error fetching user')
  }
}
