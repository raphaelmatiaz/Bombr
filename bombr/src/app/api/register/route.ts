// aqui vai tar logica para receber dados da form de register e trata-los
// verificar se o username ja existe na db, não deixar passar se for o caso
// verificar se o email ja existe na db, não deixar passar se for o caso
// hash da password
// prisma user.create
// mandar para o login (no frontend)

// MEU CODIGO
// import bcrypt from "bcryptjs";
// import { NextResponse } from "next/server";
// import prisma from "@/lib/prisma";

// export async function POST(req: Request) {

//     console.log(req.body)
//   try {
//     const { email, password, fullName, username } = await req.json();

//     // Verificar se o utilizador já existe
//     const existingUser = await prisma.user.findUnique({ where: { email } });
//     if (existingUser) {
//       console.log(`⚠️ Uma conta com o email ${email} ja existe`)
//       return NextResponse.json(
//         { error: "Utilizador já existe" },
//         { status: 400 }
//       );
//     }

//     // Encriptar password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Criar utilizador na base de dados
//     await prisma.user.create({
//       data: { email, fullName: fullName, username: username, password: hashedPassword },
//     });

//     await prisma.profile.create({
//       data: {
//         userId: existingUser.id, // Assuming you have a userId field in the profile model
//         // Add other required fields here
//       },
//     });

//     return NextResponse.json(
//       { message: "Utilizador criado com sucesso" },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ error: "Erro no registo" }, { status: 500 });
//   }
// }



// GPT 1
// import bcrypt from "bcryptjs";
// import { NextResponse } from "next/server";
// import prisma from "@/lib/prisma";

// export async function POST(req: Request) {
//   console.log(req.body);
//   try {
//     const { email, password, fullName, username } = await req.json();

//     // Verificar se o utilizador já existe
//     const existingUser = await prisma.user.findUnique({ where: { email } });
//     if (existingUser) {
//       console.log(`⚠️ Uma conta com o email ${email} ja existe`);
//       return NextResponse.json(
//         { error: "Utilizador já existe" },
//         { status: 400 }
//       );
//     }

//     // Encriptar password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Prisma transaction to create both User and Profile
//     const newUser = await prisma.$transaction(async (prisma) => {
//       // Create the Profile first
//       const profile = await prisma.profile.create({
//         data: {
//           bio: "", // Default bio or handle as needed
//           userId: "", // This will be filled after the user is created
//         },
//       });

//       // Create the User and associate it with the Profile
//       const user = await prisma.user.create({
//         data: {
//           email,
//           fullName,
//           username,
//           password: hashedPassword,
//           profileId: profile.id, // Associate the profile with the user
//           Profile: { // Ensure the profile is linked to the user
//             connect: { id: profile.id },
//           },
//         },
//       });

//       // Return the newly created user object
//       return user;
//     });

//     return NextResponse.json(
//       { message: "Utilizador criado com sucesso" },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ error: "Erro no registo" }, { status: 500 });
//   }
// }




// GPT 2
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  console.log(req.body);
  try {
    const { email, password, fullName, username } = await req.json();

    // Verificar se o utilizador já existe
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      console.log(`⚠️ Uma conta com o email ${email} ja existe`);
      return NextResponse.json(
        { error: "Utilizador já existe" },
        { status: 400 }
      );
    }

    // Encriptar password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Prisma transaction to create both User and Profile
    const newUser = await prisma.$transaction(async (prisma) => {
      // First, create the User
      const user = await prisma.user.create({
        data: {
          email,
          fullName,
          username,
          password: hashedPassword,
        },
      });

      // // Now create the Profile, using the user's ID
      // const profile = await prisma.profile.create({
      //   data: {
      //     bio: "", // Default bio or handle as needed
      //     userId: user.id, // Link the profile to the newly created user
      //   },
      // });

      // Return the newly created user object
      return user;
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


