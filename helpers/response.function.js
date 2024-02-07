function dummyResponse (req, res, responseObject) {
  responseObject.ExtraMessage = `The request method for API endpoint: ${req.url} is ${req.method} `
  res.end(JSON.stringify(responseObject))
}

export default dummyResponse
