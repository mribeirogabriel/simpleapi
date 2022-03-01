import express, { Application } from "express";
import router from "../routes/router";

const api: Application = express();

api.use(express.json());
api.use(router);

export default api;
