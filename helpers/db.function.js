// import neccessary modules
import { readFileSync } from 'fs'

// function to check if user exist in database
function findUser (username, password) {
  const rawText = readFileSync('./db.json', 'utf8')
  const users = JSON.parse(rawText)
  return users.find((user) => user.username === username && user.password === password)
}

export default findUser
