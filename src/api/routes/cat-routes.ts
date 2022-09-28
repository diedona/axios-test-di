import express from "express";
import asyncHandler from "express-async-handler";
import { container } from "../inversify.config";
import { CatController } from "../controllers/cat-controller";

const catController: CatController = container.get(CatController);
const catRoutes = express.Router();

catRoutes.get('/', asyncHandler(async (req, resp) => catController.getCatFact(req, resp)));

export { catRoutes };