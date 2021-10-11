const http = require("http");

const piping = require("piping-server");
const log4js = require("log4js");

// Create a logger
const logger = log4js.getLogger();
logger.level = "info";

const pipingServer = new piping.Server(logger);
const httpPort = 3000;

http.createServer(pipingServer.generateHandler(false))
  .listen(httpPort, ()=>{
    console.log(`Listening HTTP on ${httpPort}...`);
  });
