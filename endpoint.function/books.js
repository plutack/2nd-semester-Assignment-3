// import neccessary modules
import dummyResponse from '../helpers/response.function.js'


// handle all methods to /books route
function books (req, res, responseObject) {
  if (req.method === 'GET') {
    dummyResponse(req, res, responseObject)
  } else if (req.method === 'POST') {
    dummyResponse(req, res, responseObject)
  } else if (req.method === 'PUT') {
    dummyResponse(req, res, responseObject)
  } else if (req.method === 'PATCH') {
    dummyResponse(req, res, responseObject)
  } else if (req.method === 'DELETE') {
    dummyResponse(req, res, responseObject)
  }
}

export default books
