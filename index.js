// Authentication

// 1. Get the authentication username and password from the header.
// 2. Free up the body to be able to carry payload for other method types.
// 3. Add more endpoints for books [GET, POST, PUT, PATCH, DELETE]. (These endpoint don't to do anything. but must return a response)
// 4. Add more endpoints for authors [GET, POST, PUT, PATCH, DELETE]. (These endpoint don't to do anything. but must return a response)

// NB. Whatever the response for each of this endpoints, is up to you to decide.

import { createServer } from 'http'
import authenticateUser from './helpers/authenticate.js'
import books from './endpoint.function/books.js'
import authors from './endpoint.function/authors.js'

const port = 3000
const server = createServer((req, res) => {
  const { responseObject, success } = authenticateUser(req, res)
  if (success) {
    if (req.url === '/books') {
      books(req, res, responseObject)
    }
    if (req.url === '/authors') {
      authors(req, res, responseObject)
    }
  }
})

server.listen(port, () => console.log(`Server running at port ${port}`))
