import { Request, Response } from "express";
export default class HealthController {
    static healthCheck(req: Request, res: Response): Promise<any>;
}
