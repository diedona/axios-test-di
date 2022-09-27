import express from "express";
import asyncHandler from "express-async-handler";
import { AxiosRequester } from "../../infrastructure/http-request/axios-requester";
import { CatController } from "../controllers/cat-controller";

const catController = new CatController(new AxiosRequester()); // dependency injection?
const catRoutes = express.Router();

catRoutes.get('/', asyncHandler(async (req, resp) => catController.getCatFact(req, resp)));

export { catRoutes };