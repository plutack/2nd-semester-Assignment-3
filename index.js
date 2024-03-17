// Authentication

// 1. Get the authentication username and password from the header.
// 2. Free up the body to be able to carry payload for other method types.
// 3. Add more endpoints for books [GET, POST, PUT, PATCH, DELETE]. (These endpoint don't to do anything. but must return a response)
// 4. Add more endpoints for authors [GET, POST, PUT, PATCH, DELETE]. (These endpoint don't to do anything. but must return a response)

// NB. Whatever the response for each of this endpoints, is up to you to decide.

// import neccessary modules
import { createServer } from "http";
import authenticateUser from "./middleware/authenticate.js";
import books from "./endpoint.function/books.js";
import authors from "./endpoint.function/authors.js";

//declare variables
const port = 3000;

// initialize server
const server = createServer((req, res) => {
  const { responseObject, success } = authenticateUser(req, res);
  if (success) {
    if (req.url === "/books/author/") {
      authors(req, res, responseObject);
    }
    if (req.url === "/books") {
      books(req, res, responseObject);
    }
  } else {
    console.log(responseObject);
    res.end(JSON.stringify(responseObject));
  }
});

// start server
server.listen(port, () =>
  console.log(
    `Server running at port ${port}\nclick to open http://localhost:${port}`,
  ),
);
