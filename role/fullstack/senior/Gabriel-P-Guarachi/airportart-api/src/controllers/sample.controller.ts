import { Request, Response, NextFunction } from "express";

const NAMESPACE = 'Sample controller';
const sampleHealthCheck = (req: Request, res: Response, next: NextFunction) => {
    console.log(`${NAMESPACE}, Sample health check route called`);

    return res.status(200).json({
        message: 'pong'
    })
};

export default { sampleHealthCheck }