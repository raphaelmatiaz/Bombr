// aqui vai tar logica para receber dados da form de register e trata-los
// verificar se o username ja existe na db, não deixar passar se for o caso
// verificar se o email ja existe na db, não deixar passar se for o caso
// hash da password
// prisma user.create
// mandar para o login (no frontend)

import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {

    console.log(req.body)
  try {
    const { email, password, fullName, username } = await req.json();

    // Verificar se o utilizador já existe
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json(
        { error: "Utilizador já existe" },
        { status: 400 }
      );
    }

    // Encriptar password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Criar utilizador na base de dados
    await prisma.user.create({
      data: { email, fullName: fullName, username: username, password: hashedPassword },
    });

    return NextResponse.json(
      { message: "Utilizador criado com sucesso" },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erro no registo" }, { status: 500 });
  }
}
