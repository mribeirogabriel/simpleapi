"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = __importDefault(require("./server/api"));
const PORT = process.env.PORT || 3333;
const APP_NAME = process.env.APP_NAME || "simpleapi";
api_1.default.listen(PORT, () => {
    console.log(`[${APP_NAME}]: Server is running on ${PORT}`);
});
//# sourceMappingURL=index.js.map