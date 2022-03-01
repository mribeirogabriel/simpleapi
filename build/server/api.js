"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("../routes/router"));
const api = (0, express_1.default)();
api.use(express_1.default.json());
api.use(router_1.default);
exports.default = api;
//# sourceMappingURL=api.js.map