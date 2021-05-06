import bodyParser from "body-parser";
import express, { Request, Response, NextFunction } from "express";
import http from "http";


import config from "./config/config";
import sampleRoutes from './routes/sample.route';
import aiportRoutes from './routes/airport.route';

const NAMESPACE = "Server";
const router = express();

/**
 * Logging the request
 */
router.use((req: Request, res: Response, next: NextFunction) => {
  console.log(
    `${NAMESPACE}, METHOD - [${req.method}], URL - [${req.url}]`
  );

  res.on("finish", () => {
    console.log(
      `${NAMESPACE}, METHOD - [${req.method}], URL - [${req.url}], STATUS - [${res.statusCode}]`
    );
  });
  next();
});

/**
 * Parse the request
 */
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

/**
 * Rules of our API
 */
router.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-Width, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET PATCH DELETE POST PUT");
    return res.status(200).json({});
  }
  next();
});


/**
 * Routes
 */
router.use('/api', aiportRoutes);


/**
 * Error handling
 */

router.use((req: Request, res: Response, next: NextFunction) => {
  const error = new Error("not found");
  return res.status(404).json({
    message: error.message,
  });
});

/**
 * Create the server
 */
const httpServer = http.createServer(router);
httpServer.listen(config.server.port, () =>
  console.log(
    `${NAMESPACE}, Server running on ${config.server.hostname}:${config.server.port}`
  )
);
