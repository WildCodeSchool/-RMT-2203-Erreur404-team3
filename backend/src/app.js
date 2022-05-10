/* eslint-disable no-restricted-syntax */
const express = require("express");
const path = require("path");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
// let's create express app

const app = express();

// use some application-level middlewares
app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

const server = http.createServer(app);

// load router

const router = require("./router");

app.use(router);

// Chat - socket.io  config

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("join_room", (roomNumber) => {
    socket.join(roomNumber);
  });
  // socket.on("disconnect", () => {
  //     console.log(`User Disconnected: ${socket.id}`);
  // });
});

server.listen(3001, () => {
  console.log("server running");
});

// fin de la config Chat

// ready to export
module.exports = app;
