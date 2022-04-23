const http = require("http").createServer();
const io = require("socket.io")(http, {
  cors: {
    origin: ["http://localhost:8080"],
  },
});
const rooms = [];

io.on("connection", (socket) => {
  // 部屋を新しく建てる
  socket.on("create", (userName) => {
    const roomId = generateRoomId();
    const room = {
      id: roomId,
      users: [{ id: socket.id, name: userName }],
      turnUserIndex: 0,
      posts: [],
    };
    rooms.push(room);
    socket.join(roomId);
    io.to(socket.id).emit("updateRoom", room);
  });

  // 部屋に入室する
  socket.on("enter", (userName, roomId) => {
    console.log(rooms);
    const roomIndex = rooms.findIndex((r) => r.id == roomId);
    if (roomIndex == -1) {
      io.to(socket.id).emit("notifyError", "部屋が見つかりません");
    } else {
      rooms[roomIndex].users.push({ id: socket.id, name: userName });
      socket.join(rooms[roomIndex].id);
      io.to(socket.id).emit("updateRoom", rooms[roomIndex]);
    }
  });
});

// ランダムなroomIdを生成する
function generateRoomId() {
  const id = Math.floor(Math.random() * 8999 + 1000);
  if (rooms.some((r) => r.id == id)) {
    // ランダムに生成したidが既に存在する場合は作り直す
    return generateRoomId();
  }
  return id;
}

http.listen(3031);
