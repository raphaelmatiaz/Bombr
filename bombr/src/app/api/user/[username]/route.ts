import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // Ensure this is correctly pointing to your Prisma client

export async function GET(req: Request, { params }: { params: { username: string } }) {
    const { username } = await params;

    console.log("Fetching user with identifier:", username);

    try {
        let user = await prisma.user.findUnique({
            where: {
                username: username,
            },
        });

        if (!user) {
            console.log("User not found by username, trying ID lookup...");

            user = await prisma.user.findUnique({
                where: {
                    id: username, // Try by ID if not found by username
                },
            });
        }

        if (!user) {
            console.log("User not found at all.");
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        if (user) {
            let sentPosts = await prisma.post.findMany({
                where: {
                    senderId: {
                        equals: user.id
                    }
                }
            })

            let receivedPosts = await prisma.post.findMany({
                where: {
                    receiverId: {
                        equals: user.id
                    }
                }
            })

            if (sentPosts || receivedPosts) {
                const u = { ...user, sentPosts, receivedPosts }
                console.log("User found:", u);
                return NextResponse.json(u);
            }
        }

        console.log("User found:", user);
        return NextResponse.json(user);
    } catch (error) {
        console.error("Error fetching user:", error);
        return NextResponse.json({ error: "Error fetching user" }, { status: 500 });
    }
}
