import { neon } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'

const connection = process.env.NEXT_PUBLIC_DRIZZLE_DATABASE_URL as string

const sql = neon(connection)

export const db = drizzle(sql)
