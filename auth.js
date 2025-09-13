import GoogleProvider from "next-auth/providers/google";
import { db } from "./lib/database";
import { usersTable } from "./lib/database/schema";
import { eq } from "drizzle-orm";

export const authConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      httpOptions: {
        timeout: 10000,
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    //logic to happen when user sign in
    async signIn({ user }) {
      if (!user?.email) {
        return false;
      }
      //check if user already exist in database
      try {
        const existingUser = await db.query.usersTable.findFirst({
          where: eq(usersTable.email, user.email),
        });
        //add user to database if user doesnt exist
        if (!existingUser) {
          await db.insert(usersTable).values({
            name: user.name ?? "",
            email: user.email,
            image: user.image ?? "",
          });
        } else {
          console.log("✅ User already exists in DB:", existingUser);
        }
      } catch (err) {
        console.error("❌ Error while inserting/finding user in DB:", err);
        return false;
      }
      // allow login
      return true;
    },

    async session({ session }) {
      if (!session.user?.email) {
        return session;
      }

      try {
        const dbUser = await db.query.usersTable.findFirst({
          where: eq(usersTable.email, session.user.email),
        });

        if (dbUser) {
          session.user.id = dbUser.id; // attach DB id
        } else {
          console.warn("⚠️ No matching DB user found for:", session.user.email);
        }
      } catch (err) {
        console.error("❌ Error while fetching user in session callback:", err);
      }

      return session;
    },
  },
};
