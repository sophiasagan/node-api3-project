require('dotenv').config()

const server = require("./server"); // imports server from api

const port = process.env.PORT || 4021
server.listen(port, () => {
  console.log( `*** Server Running on http://localhost:${port} ***` ); 
});