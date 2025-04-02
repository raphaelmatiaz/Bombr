import { NextAuthOptions } from "next-auth";

import { PrismaAdapter } from "@auth/prisma-adapter"
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import DiscordProvider from "next-auth/providers/discord";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import prisma from "@/lib/prisma";

export const authOptions: NextAuthOptions = {

  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID as string,
      clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {

        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // Replace this with your user authentication logic
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user) {
          throw new Error("Invalid credentials");
        }

        if (!user?.password) {
          throw new Error("Invalid credentials");
        }

        const isPasswordValid = await compare(credentials.password, user.password);

        if (!isPasswordValid) {
          throw new Error("Invalid credentials");
        }

        return {
          id: user.id.toString(),
          email: user.email,
          name: user.name,
          profileId: user.profileId,
          username: user.username,
        };
      },
    }),
  ],
  
  callbacks: {
    async jwt({ token, user }: { token: Record<string, unknown>; user?: { id: string; email: string; name?: string; profileId?: string; username?: string } }) {
      // If user exists (i.e., first login), assign its values to the token
      if (user) {
        token.user = user;
      } else {
        // Fetch the user from the database to include all fields
        const dbUser = await prisma.user.findUnique({
          where: { email: typeof token.email === "string" ? token.email : undefined }, // Ensure email is a string
        });
  
        if (dbUser) {
          token.user = {
            id: dbUser.id,
            email: dbUser.email,
            fullname: dbUser.fullName,
            username: dbUser.username,
            emailVerified: dbUser.emailVerified,
            image: dbUser.image,
            name: dbUser.name,
            profileId: dbUser.profileId,
          };
        }
      }
      return token;
    },
  
    // async session({ session, token }: { session: import("next-auth").Session; token: import("next-auth").JWT }) {
    //   session.user = token.user as typeof session.user;
    //   return session;
    // },
    async session({ session, token }: { session: import("next-auth").Session; token: import("next-auth").JWT }) {
      session.user = token.user as typeof session.user;
      return session;
    },
  },
  
  secret: process.env.NEXTAUTH_SECRET,
  session: { 
    strategy: "jwt", // Ensure correct session strategy
    maxAge: 60 * 60 * 24 * 7, }, // 7 days session
}