// Services contain business logic and act as an abstraction over the database. They do not deal with HTTP directly.

// import { db } from '../../../db'
// import { users } from '../../../db/schema'

// export const getUserById = async (id: number) => {
//   const result = await db.select().from(users).where(users.id.eq(id)).limit(1)
//   return result[0] || null
// }

// export const createUser = async (name: string, email: string) => {
//   return await db.insert(users).values({ name, email }).returning()
// }
