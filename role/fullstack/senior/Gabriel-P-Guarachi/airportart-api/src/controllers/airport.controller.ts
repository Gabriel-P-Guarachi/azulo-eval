import { Request, Response, NextFunction } from "express";

import { Connect, Query } from "../config/mysql";

const NAMESPACE = "Airpot controller";
const getAllAirport = (req: Request, res: Response, next: NextFunction) => {
  console.log(`${NAMESPACE}, Airpot getAllAirport route called`);

  let query = "SELECT * FROM airport";

  Connect()
    .then((connection) => {
      Query(connection, query)
        .then((results: any) => {
          return res.status(200).json({
            results,
            total: results.length
          });
        })
        .catch((error) => {
          console.log(`${NAMESPACE}, ${error.message}, ${error}`);
          return res.status(500).json({
            message: error.message,
            error,
          });
        })
        .finally(() => {
          connection.end();
        });
    })
    .catch((error) => {
      console.log(`${NAMESPACE}, ${error.message}, ${error}`);
      return res.status(500).json({
        message: error.message,
        error,
      });
    });
};

export default { getAllAirport };
