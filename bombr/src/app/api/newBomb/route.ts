import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        console.log("Received body:", body); // ✅ Log incoming data

        if (!body.content || !body.senderId || !body.receiverId || !body.message) {
            console.error("Missing required fields:", body);
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const newBomb = await prisma.post.create({
            data: {
                content: body.content,
                senderId: body.senderId,
                receiverId: body.receiverId,
                message: body.message,
            },
        });

        console.log("New post created:", newBomb); // ✅ Log DB response

        return NextResponse.json(newBomb, { status: 201 });

    } catch (error) {
        console.error("Error posting NewBomb:", error); // ✅ Log full error
        return NextResponse.json({ error: "Error posting NewBomb" }, { status: 500 });
    }
}
