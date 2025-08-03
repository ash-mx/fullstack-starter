// Middleware is for reusable logic that runs before or after the request handler. Think auth, logging, CORS, rate limiting, etc.

// import { MiddlewareHandler } from 'hono'

// export const requireAuth: MiddlewareHandler = async (c, next) => {
//   const authHeader = c.req.header('Authorization')
//   if (!authHeader || !authHeader.startsWith('Bearer ')) {
//     return c.json({ error: 'Unauthorized' }, 401)
//   }

//   const token = authHeader.split(' ')[1]
//   // validate token here...
//   const user = { id: 1, name: 'Jane Doe' } // mock user
//   c.set('user', user)

//   await next()
// }
