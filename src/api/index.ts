import { Application } from "./app";
import * as dotenv from 'dotenv'
import { env } from "process";

dotenv.config();

const port = env.PORT || '3000';

new Application().server.listen(port, () => {
  console.log(`listening on ${port}...`);
});