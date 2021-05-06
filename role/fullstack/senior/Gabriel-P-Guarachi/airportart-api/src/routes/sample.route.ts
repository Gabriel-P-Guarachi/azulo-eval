
import express, { Request, Response, NextFunction } from "express";
import controller from "../controllers/sample.controller";
const router = express.Router();

router.get('/ping', controller.sampleHealthCheck);

export = router;