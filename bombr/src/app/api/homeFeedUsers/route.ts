import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // Adjust the import path
// import User from '@/types/user.ts';

export async function POST(req: Request) {
  try {
    const { senderId, receiverId } = await req.json();

    const users = await prisma.user.findMany({
      where: {
        id: { in: [senderId, receiverId] },
      },
    });

    if (!users || users.length === 0) {
      return NextResponse.json({ error: "Users not found" }, { status: 404 });
    }

    const senderUser = users.find((user) => user.id === senderId);
    const receiverUser = users.find((user) => user.id === receiverId);

    return NextResponse.json({ senderUser, receiverUser }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}
