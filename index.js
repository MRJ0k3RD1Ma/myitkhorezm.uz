const http = require('http');
const app = require("./app");

const port =  2691;
const server = http.createServer(app);

server.listen(port,()=>{
    console.log('Server running')
});
