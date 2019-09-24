const http = require("http");
const server = http.createServer();

server.on("request", (req, res) => {
  if (req.method === "POST" && req.url === "/birthday") {
    let body = [];

    req
      .on("data", chunk => {
        body.push(chunk);
      })
      .on("end", () => {
        res.writeHead(200, { "Content-Type": "text/plain" });
        body = Buffer.concat(body).toString();

        let day = new Date(body);
        let weekday = day.getDay();
        let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        res.end(`Your born day is ${week[weekday]}`);
      });
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(4001);
console.log("Servidor en la url http://localhost:4001");
