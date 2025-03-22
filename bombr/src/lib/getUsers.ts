import { PrismaClient } from "@prisma/client";
import { User } from "../types/user";

const prisma = new PrismaClient();

export async function getUsers(): Promise<User[]> {
  try {
    return await prisma.user.findMany();
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}
