import express from "express";
import serve from "serve-static";
import morgan from "morgan";
import {dev, port} from "./config";
import path from "path";

export const start = (sapper: any) => {
  const app = express();
  !dev && app.use(morgan("dev"));
  app.use(serve(path.resolve(__dirname, "../../app/static"), { immutable: true }));
  app.use(sapper.app());
  app.listen(port, () => {
    console.log("Server listening on port", port);
  });
}