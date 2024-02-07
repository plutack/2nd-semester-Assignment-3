import { readFileSync } from 'fs'

function findUser (username, password) {
  const rawText = readFileSync('./db.json', 'utf8')
  const users = JSON.parse(rawText)
  return users.find((user) => user.username === username && user.password === password)
}

export default findUser
