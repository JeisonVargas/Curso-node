const fs = require("fs");

const server = require("http").createServer();

server.on("require", (req, res) => {
  const src = fs.createReadStream("./big");
  src.pipe(res);
});

server.listen(5000);
