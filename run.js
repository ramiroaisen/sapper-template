require("source-map-support").install();

const server = require("./server/dist/server");

const app = process.env.APP_DEV_BUILD ?
  require("./app/__sapper__/dev/server/server").middleware :
  require("./app/__sapper__/build/server/server").middleware;

server.start({app});