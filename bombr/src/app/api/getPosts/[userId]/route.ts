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

import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    try {
        // Extract userId from the URL
        const pathnameParts = req.nextUrl.pathname.split("/");
        const userId = pathnameParts[pathnameParts.length - 1]; // Get last part of the path

        if (!userId) {
            return NextResponse.json({ error: "User ID is required" }, { status: 400 });
        }

        const posts = await prisma.post.findMany({
            where: {
                OR: [
                    { senderId: userId },
                    { receiverId: userId }
                ]
            },
            orderBy: { createdAt: "desc" }
        });

        return NextResponse.json(posts, { status: 200 });
    } catch (error) {
        console.error("Error fetching user posts:", error);
        return NextResponse.json({ error: "Error fetching user posts" }, { status: 500 });
    }
}
