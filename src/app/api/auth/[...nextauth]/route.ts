import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const handler = NextAuth({
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
            authorization: { params: { prompt: "login", scope: "user:email" } },
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile }) {
            await prisma.$connect();
            console.log("User object:", user);
            const existingUser = await prisma.user.findUnique({
                where: { name: user.name ?? "Anonymous User" },
            });
            if (existingUser) {
                console.log("User already exists:", existingUser);
            } else {
                const newUser = await prisma.user.create({
                    data: {
                        name: user.name ?? "Anonymous User",
                        email: user.email ?? "no-reply@example.com",
                    },
                });
                console.log("New user created:", newUser);
            }
            return true;
        },
        async session({ session, token }) {
            if (token?.id) {
                session.user = {
                    ...session.user,
                    id: token.id.toString(), // Assign id to the session user object
                };
            }
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id; // Store the user's id in the JWT
            }
            return token;
        },
        async redirect({ url, baseUrl }) {
            return "/dashboard";
        },
    },
    pages: {
        signIn: "/auth/signin",
        signOut: "/",
    },
    secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };