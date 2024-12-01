import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { z } from "zod";

export const baseRouter = createTRPCRouter({
    createBase: publicProcedure
        .input(
            z.object({
                name: z.string(),
            })
        )
        .mutation(async ({ input, ctx }) => {
            const baseCount = await ctx.prisma.base.count();
            const newName = input.name || `Untitled ${baseCount + 1}`;
            return ctx.prisma.base.create({
                data: {
                    name: newName,
                },
            });
        }),

    getBases: publicProcedure.query(async ({ ctx }) => {
        return ctx.prisma.base.findMany({
            orderBy: { createdAt: "asc" },
        });
    }),
});
