import z from "zod";
import { FastifyInstance } from "fastify";
import { makePowService } from "@services/factories/makePowService";

export async function calculatePow(app: FastifyInstance) {
  app.post("/pow", async (req, reply) => {
    try{
      const powService = makePowService()
      
      const powBody = z.object({
        a: z.number(),
        exp: z.number(),
      });
      
      const { a, exp } = powBody.parse(req.body);
      
      const result = await powService.execute(a, exp)
      
      return reply.status(200).send({ result });
    }catch(err){
      console.log(err);
    }
  });
}
