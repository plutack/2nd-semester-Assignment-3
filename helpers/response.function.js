function dummyResponse (req, res) {
  res.end(`The request method for API endpoint: ${req.url} is ${req.method} `)
}

export default dummyResponse
