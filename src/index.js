const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
    fs.readFile("index.html", "utf8", (err, data) => {
        if (err) {
         res.writeHead(500);
         res.end("index.html が見つかりません");
         return;
        }
        res.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8"
        });
        res.end(data);
    });
});
server.listen(3000, () => {
    console.log("サーバー起動中: http://localhost:3000");
});