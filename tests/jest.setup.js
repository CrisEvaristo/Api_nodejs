"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testeServer = void 0;
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../src/server/server"));
exports.testeServer = (0, supertest_1.default)(server_1.default);
