import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";


const itemRouter = createTRPCRouter({
    addTiems: publicProcedure
            .input
            (
                z.object({ name: z.string() })
            )
            .mutation(
                //@ts-ignore
                 async ({ input , ctx }) => {
                // Here some login stuff would happen
                const {name } = input 
                ctx.prisma.ShoppingItem.create({
                    data:{
                        name
                    }
                })
                return{
                    id:1,
                    name:name
                }
              }
              ),
})