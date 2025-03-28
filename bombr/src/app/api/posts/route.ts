import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // Adjust the import path based on your project structure

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      include: {
        sentBy: true, // Fetch the sender user object
        receivedBy: true, // Fetch the receiver user object
      },
    });

    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
}
