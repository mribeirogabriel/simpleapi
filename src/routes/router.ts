import express, { Request, Response } from "express";

const router = express.Router();
const APP_NAME = process.env.APP_NAME || "simpleapi";

router.get("/", (req: Request, res: Response): void => {
  const response = {
    app: APP_NAME,
    timestamp: Date.now(),
  };
  res.status(200).json(response);
});

export default router;
