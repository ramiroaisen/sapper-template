import os from "os";

export const local = /fedora/.test(os.hostname());
export const dev = process.env.NODE_ENV === "development";
export const port = local ? 3000 : 9636;

process.env.PORT = String(port);