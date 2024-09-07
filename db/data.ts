import { eq } from 'drizzle-orm'
import { db } from './drizzle'
import { users } from './schema'

export const getUserByEmail = async (email: string) => {
  const user = await db.select().from(users).where(eq(users.email, email))

  return user[0]
}
