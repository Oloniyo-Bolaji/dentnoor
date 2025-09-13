This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


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