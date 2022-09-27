import express, { Request, Response } from "express";
import asyncHandler from "express-async-handler";

const peopleRoutes = express.Router();

peopleRoutes.get('/', (req: Request, response: Response) => {
  console.log('req data:', req.query);
  return response.json({ message: "ok!" });
});

peopleRoutes.get('/error', asyncHandler(async (req: Request, response: Response) => {
  await sleepForSeconds(5);
  throw new Error('custom failure');
}));

const sleepForSeconds = (seconds: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

export { peopleRoutes };