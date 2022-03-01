"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const APP_NAME = process.env.APP_NAME || "simpleapi";
const ENV_NAME = process.env.ENV_NAME || "dev";
class HealthController {
    static healthCheck(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = {
                app: APP_NAME,
                env: ENV_NAME,
                method: req.method,
                path: req.path,
                timestamp: Date.now(),
            };
            res.status(200).json(response);
        });
    }
}
exports.default = HealthController;
//# sourceMappingURL=healthController.js.map