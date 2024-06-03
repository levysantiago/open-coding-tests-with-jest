import fastify from "fastify";
import { calculatePow } from "./routes/pow.route";

const app = fastify();

app.register(calculatePow);

export default app