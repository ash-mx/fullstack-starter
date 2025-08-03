// Controllers orchestrate requests and responses. They call services and return HTTP responses. Optional in Hono—you can put everything in route files, but separating makes it cleaner.

// import { Context } from 'hono'
// import * as userService from '../services/userService'

// export const getUser = async (c: Context) => {
//   const id = Number(c.req.param('id'))
//   const user = await userService.getUserById(id)

//   if (!user) return c.json({ error: 'User not found' }, 404)
//   return c.json(user)
// }

// export const createUser = async (c: Context) => {
//   const body = await c.req.json()
//   const { name, email } = body

//   const user = await userService.createUser(name, email)
//   return c.json(user)
// }
