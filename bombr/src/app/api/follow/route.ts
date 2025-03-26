import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { followerId, followingId } = await req.json();

    if (!followerId || !followingId) {
      return NextResponse.json({ message: "Missing user IDs" }, { status: 400 });
    }

    // Check if the follow relationship already exists
    const existingFollow = await prisma.follow.findUnique({
      where: { followerId_followingId: { followerId, followingId } },
    });

    if (existingFollow) {
      return NextResponse.json({ message: "You are already following this user" }, { status: 400 });
    }

    // Create the follow relationship
    const follow = await prisma.follow.create({
      data: { followerId, followingId },
    });

    return NextResponse.json(follow, { status: 201 });
  } catch (error) {
    console.error("Follow error:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
