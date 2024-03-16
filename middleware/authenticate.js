import findUser from '../helpers/db.function.js'

function authenticateUser (req, res) {
  const { headers } = req
  const username = headers.username || undefined
  const password = headers.password || undefined
  const responseObject = {}
  if (findUser(username, password)) {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    responseObject.message = 'Authentication successful!'
    return { responseObject, success: true }
  } else {
    res.statusCode = 401
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ message: 'Authentication failed!' }))
    return { responseObject, success: false }
  }
}
export default authenticateUser
