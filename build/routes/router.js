"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const healthController_1 = __importDefault(require("../controllers/healthController"));
const mainController_1 = __importDefault(require("../controllers/mainController"));
const router = express_1.default.Router();
router.get("/", mainController_1.default.mainRoute);
router.post("/", mainController_1.default.mainRoute);
router.get("/healthcheck", healthController_1.default.healthCheck);
exports.default = router;
//# sourceMappingURL=router.js.map