import { Request, Response } from "express";

const APP_NAME = process.env.APP_NAME || "simpleapi";

export default class HealthController {
  static async healthCheck(req: Request, res: Response): Promise<any> {
    const response = {
      app: APP_NAME,
      path: req.path,
      method: req.method,
      timestamp: Date.now(),
    };
    res.status(200).json(response);
  }
}
