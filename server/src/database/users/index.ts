import fs from 'node:fs/promises'
import { User } from 'meeting-room-booking-types'

const USERS_URL = 'src/database/users/users.json'

export const fetchUsers = async () => {
  const usersDataString = await fs.readFile(USERS_URL, 'utf-8')
  const usersData = JSON.parse(usersDataString) as { users: User[] }

  return usersData.users
}

export const fetchUser = async (id: string) => {
  const users = await fetchUsers()

  const user = users.find((user) => user.id === id)

  return user
}
