const http = require("http");
const app = require("./app");
const port = 8001;
const server = http.createServer(app).listen(port, () => {
  console.log(`${port} is running`);
});
