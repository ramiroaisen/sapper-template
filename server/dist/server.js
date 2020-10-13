"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = void 0;
const express_1 = __importDefault(require("express"));
const serve_static_1 = __importDefault(require("serve-static"));
const morgan_1 = __importDefault(require("morgan"));
const config_1 = require("./config");
const path_1 = __importDefault(require("path"));
exports.start = (sapper) => {
    const app = express_1.default();
    !config_1.dev && app.use(morgan_1.default("dev"));
    app.use(serve_static_1.default(path_1.default.resolve(__dirname, "../../app/static"), { immutable: true }));
    app.use(sapper.app());
    app.listen(config_1.port, () => {
        console.log("Server listening on port", config_1.port);
    });
};
//# sourceMappingURL=server.js.map