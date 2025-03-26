import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma'; // Ensure the correct path for your Prisma client

export async function GET(req: Request, { params }: { params: { username: string } }) {
    const { username } = params;

    try {
        let user;

        if (username) {
            // Try fetching by username
            user = await prisma.user.findUnique({
                where: {
                    username: username,
                },
            });
        }

        // If the paarams passed is the id, and thus, not the username (usernames are 15 characters long)
        if (username.length > 20) {
            // Fallback to fetching by user ID if username is not found
            user = await prisma.user.findUnique({
                where: {
                    id: username,
                },
            });
        }

        if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        return NextResponse.json(user);
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching user' }, { status: 500 });
    }
}
