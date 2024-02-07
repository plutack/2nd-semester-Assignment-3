import findUser from './db.function'

function authenticateUser (req, res) {
  const { headers } = req
  const username = headers.username || undefined
  const password = headers.password || undefined
  if (findUser(username, password)) {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    console.log(res.statusCode)
    res.end(JSON.stringify({ message: 'Authentication successful!' }))
    return true
  } else {
    res.statusCode = 401
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ message: 'Authentication failed!' }))
    return false
  }
}
export default authenticateUser
