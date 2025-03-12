import NextAuth from "next-auth/next";
import { authOptions } from "../../../../../lib/authOptions";


const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }


// {
//     providers: [
//         GithubProvider({
//             clientId: process.env.GITHUB_ID as string,
//             clientSecret: process.env.GITHUB_SECRET as string,
//         }),
//         GoogleProvider({
//             clientId: process.env.GOOGLE_CLIENT_ID as string,
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
//         })
//     ]
// }