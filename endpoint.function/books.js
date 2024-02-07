import dummyResponse from '../helpers/response.function'
function books (req, res) {
  if (req.method === 'GET') {
    dummyResponse(req, res)
  } else if (req.method === 'POST') {
    dummyResponse(req, res)
  } else if (req.method === 'PUT') {
    dummyResponse(req, res)
  } else if (req.method === 'PATCH') {
    dummyResponse(req, res)
  } else if (req.method === 'DELETE') {
    dummyResponse(req, res)
  }
}

export default books
