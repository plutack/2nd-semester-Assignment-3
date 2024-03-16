// create reusable dummy response for to use for all route and method types
function dummyResponse (req, res, responseObject) {
  responseObject.ExtraMessage = `The request method for API endpoint: ${req.url} is ${req.method} `
  res.end(JSON.stringify(responseObject))
}

export default dummyResponse
