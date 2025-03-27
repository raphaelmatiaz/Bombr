// import { NextResponse } from "next/server";
// import prisma from "@/lib/prisma";

// export async function GET(
//     req: Request,
//     { params }: { params: { userId: string } }
// ) {
//     try {
//         const { userId } = params;

//         if (!userId) {
//             return NextResponse.json({ error: "User ID is required" }, { status: 400 });
//         }

//         const posts = await prisma.post.findMany({
//             where: {
//                 OR: [
//                     { senderId: userId },
//                     { receiverId: userId }
//                 ]
//             },
//             orderBy: { createdAt: "desc" } // ✅ Newest first
//         });

//         return NextResponse.json(posts, { status: 200 });
//     } catch (error) {
//         console.error("Error fetching user posts:", error);
//         return NextResponse.json({ error: "Error fetching user posts" }, { status: 500 });
//     }
// }







// import { NextResponse } from "next/server";
// import prisma from "@/lib/prisma";
// import { NextRequest } from "next/server";

// export async function GET(
//     req: NextRequest,
//     { params }: { params: { userId: string } }
// ) {
//     try {
//         const userId = params.userId;

//         if (!userId) {
//             return NextResponse.json({ error: "User ID is required" }, { status: 400 });
//         }

//         const posts = await prisma.post.findMany({
//             where: {
//                 OR: [
//                     { senderId: userId },
//                     { receiverId: userId }
//                 ]
//             },
//             orderBy: { createdAt: "desc" } // ✅ Newest first
//         });

//         return NextResponse.json(posts, { status: 200 });
//     } catch (error) {
//         console.error("Error fetching user posts:", error);
//         return NextResponse.json({ error: "Error fetching user posts" }, { status: 500 });
//     }
// }







// import { NextResponse } from "next/server";
// import prisma from "@/lib/prisma";
// import { NextRequest } from "next/server";

// export async function GET(req: NextRequest) {
//     try {
//         // Extract userId from the URL
//         const pathnameParts = req.nextUrl.pathname.split("/");
//         const userId = pathnameParts[pathnameParts.length - 1]; // Get last part of the path

//         if (!userId) {
//             return NextResponse.json({ error: "User ID is required" }, { status: 400 });
//         }

//         const posts = await prisma.post.findMany({
//             where: {
//                 OR: [
//                     { senderId: userId },
//                     { receiverId: userId }
//                 ]
//             },
//             orderBy: { createdAt: "desc" }
//         });

//         return NextResponse.json(posts, { status: 200 });
//     } catch (error) {
//         console.error("Error fetching user posts:", error);
//         return NextResponse.json({ error: "Error fetching user posts" }, { status: 500 });
//     }
// }







// import { NextResponse } from "next/server";
// import prisma from "@/lib/prisma";
// import { NextRequest } from "next/server";

// export async function GET(req: NextRequest) {
//     try {
//         // Extract username from the URL
//         const pathnameParts = req.nextUrl.pathname.split("/");
//         const username = pathnameParts[pathnameParts.length - 1]; // Get last part of the path

//         if (!username) {
//             return NextResponse.json({ error: "Username is required" }, { status: 400 });
//         }

//         const user = await prisma.user.findUnique({
//             where: { username },
//         });

//         if (!user) {
//             return NextResponse.json({ error: "User not found" }, { status: 404 });
//         }

//         return NextResponse.json(user, { status: 200 });
//     } catch (error) {
//         console.error("Error fetching user:", error);
//         return NextResponse.json({ error: "Error fetching user" }, { status: 500 });
//     }
// }





// import { NextResponse } from "next/server";
// import prisma from "@/lib/prisma";
// // import { NextRequest } from "next/server";

// export default async function GET(req: Request) {
  
//   try {
//     // Extract username from params (dynamic route segments)
//     const { username } = await requestAnimationFrame.json()

//     if (!username) {
//       return NextResponse.json({ error: "Username is required" }, { status: 400 });
//     }

//     const user = await prisma.user.findUnique({
//       where: { username },
//     });

//     if (!user) {
//       return NextResponse.json({ error: "User not found" }, { status: 404 });
//     }

//     return NextResponse.json(user, { status: 200 });
//   } catch (error) {
//     console.error("Error fetching user:", error);
//     return NextResponse.json({ error: "Error fetching user" }, { status: 500 });
//   }
// }






import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    // Extract username from the URL path
    const pathnameParts = req.nextUrl.pathname.split("/");
    const username = pathnameParts[pathnameParts.length - 1]; // Get last part of the path

    if (!username) {
      return NextResponse.json({ error: "Username is required" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json({ error: "Error fetching user" }, { status: 500 });
  }
}
