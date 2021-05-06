
import express from "express";
import controller from "../controllers/airport.controller";
const router = express.Router();

router.get('/get/airports', controller.getAllAirport);

export = router;