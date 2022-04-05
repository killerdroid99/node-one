const http = require("http");
const fs = require("fs");

const host = process.env.HOST || "localhost";
const port = process.env.PORT || 5050;

const server = http.createServer((req, res) => {
	res.writeHead(200, { "Content-Type": "text/html" });
	if (req.url === "/") {
		res.end(fs.readFileSync("index.html"));
	} else if (req.url === "/about") {
		res.end(fs.readFileSync("about.html"));
	} else if (req.url === "/contact") {
		res.end(fs.readFileSync("contact-me.html"));
	} else res.end(fs.readFileSync("404.html"));
});

server.listen(port, host, () => {
	console.log(`Server running at http://${host}:${port}`);
});
