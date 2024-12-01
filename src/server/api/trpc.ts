import { initTRPC, TRPCError } from "@trpc/server";
import superjson from "superjson";
import { ZodError } from "zod";
import { auth } from "~/server/auth";
import { db } from "~/server/db";

interface Session {
  user: {
    id: string;
    name: string;
    email: string;
  };
}

type Context = {
  session?: Session | null;
  db: typeof db;
  headers: Headers;
};

export const createTRPCContext = async (opts: { headers: Headers }): Promise<Context> => {
  const session = await auth();
  return {
    db,
    session: session ?? null,
    headers: opts.headers,
  };
};

const t = initTRPC.context<Context>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
            error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  },
});

const timingMiddleware = t.middleware(async ({ next, path }) => {
  const start = Date.now();

  if (process.env.NODE_ENV === "development") {
    const waitMs = Math.floor(Math.random() * 400) + 100;
    await new Promise((resolve) => setTimeout(resolve, waitMs));
  }

  const result = await next();
  const end = Date.now();

  console.log(`[TRPC] ${path} took ${end - start}ms to execute`);
  return result;
});

export const publicProcedure = t.procedure.use(timingMiddleware);

export const protectedProcedure = t.procedure
    .use(timingMiddleware)
    .use(({ ctx, next }) => {
      if (!ctx.session?.user) {
        throw new TRPCError({ code: "UNAUTHORIZED" });
      }
      return next({
        ctx: {
          session: ctx.session,
        },
      });
    });

export const createTRPCRouter = t.router;
export const createCallerFactory = t.createCallerFactory;
