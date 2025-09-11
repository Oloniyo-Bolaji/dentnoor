import GoogleProvider from "next-auth/providers/google";
import { db } from "./lib/database";
import { usersTable } from "./lib/database/schema";
import { eq } from "drizzle-orm";

export const authConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.AUTH_SECRET,

  callbacks: {
    async signIn({ user }) {
      if (!user?.email) return false;

      const existingUser = await db.query.usersTable.findFirst({
        where: eq(usersTable.email, user.email),
      });

      if (!existingUser) {
        // insert new user into DB
        await db.insert(usersTable).values({
          name: user.name ?? "",
          email: user.email,
          image: user.image ?? "",
        });
      }

      return true;
    },

    async session({ session }) {
      if (session.user?.email) {
        const dbUser = await db.query.usersTable.findFirst({
          where: eq(usersTable.email, session.user.email),
        });

        if (dbUser) {
          session.user.id = dbUser.id; // attach DB id
        }
      }
      return session;
    },
  },
};
