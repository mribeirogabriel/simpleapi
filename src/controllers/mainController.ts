import { Request, Response } from "express";

export default class MainController {
  static async mainRoute(req: Request, res: Response): Promise<any> {
    const response = {
      method: req.method,
      path: req.path,
    };
    res.status(200).json(response);
  }
}
