const http = require("http").createServer();
const io = require("socket.io")(http, {
  cors: {
    origin: ["http://localhost:8080"],
  },
});

http.listen(3031);
