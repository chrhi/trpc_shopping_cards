import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    //@ts-ignore
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
     //@ts-ignore
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),
});
