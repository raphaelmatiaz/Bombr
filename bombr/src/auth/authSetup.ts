import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    signIn: async ({ user, account, profile, email, credentials }) => {
      // Logged in users are authenticated, otherwise redirect to login page
      return true;
    },
  },
});


// Previous Code
// export const { handlers, signIn, signOut, auth } = NextAuth({
//   providers: [
//     Google({
//       authorization: {
//         params: {
//           prompt: "consent",
//           access_type: "offline",
//           response_type: "code",
//         },
//       },
//     }),
//     GitHub,
//   ],
//   pages: {
//     signIn: "/login",
//   },
//   callbacks: {
//     authorized: async ({ auth }) => {
//       // Logged in users are authenticated, otherwise redirect to login page
//       return !!auth;
//     },
//   },
//   trustHost: true,
// });