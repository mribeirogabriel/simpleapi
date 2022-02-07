import express from "express";
import HealthController from "../controllers/healthController";
import MainController from "../controllers/mainController";

const router = express.Router();

router.get("/", MainController.mainRoute);
router.post("/", MainController.mainRoute);
router.get("/healthcheck", HealthController.healthCheck);

export default router;
