"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.port = exports.dev = exports.local = void 0;
const os_1 = __importDefault(require("os"));
exports.local = /fedora/.test(os_1.default.hostname());
exports.dev = process.env.NODE_ENV === "development";
exports.port = exports.local ? 3000 : 9636;
process.env.PORT = String(exports.port);
//# sourceMappingURL=config.js.map