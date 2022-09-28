import express from "express";
import asyncHandler from "express-async-handler";
import { CatController } from "../controllers/cat-controller";
import { container } from "../../infrastructure/inversify.config";
import { IRequester } from "../../domain/requester.interface";
import { TYPES } from "../../infrastructure/types";

const catController = new CatController(container.get<IRequester>(TYPES.IRequester));
const catRoutes = express.Router();

catRoutes.get('/', asyncHandler(async (req, resp) => catController.getCatFact(req, resp)));

export { catRoutes };