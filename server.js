require("dotenv").config()

const express = require('express');
// const helmet = require('helmet');
const userRouter = require('./users/userRouter.js');
const postRouter = require('./posts/postRouter')

const server = express();

server.use(express.json());
// server.use(helmet());
server.use(logger);

server.use('/users', userRouter)
server.use('/posts', postRouter)

server.get('/', (req, res) => {
  res.status(200).json({
    message: `Welcome to ${process.env.COHORT}`,
    student: process.env.STUDENT || "No student found",
  })
})

//custom middleware

function logger(req, res, next) {
  console.log(`Method: ${req.method} | URL: Request to ${req.originalUrl} | Timestamp: ${Date(Date.now).toString()}`);
    next();
}

module.exports = server;
