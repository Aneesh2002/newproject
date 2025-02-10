// import { PrismaClient } from '@prisma/client';
// import { NextResponse } from 'next/server';  // Import NextResponse

// const prisma = new PrismaClient();

// export async function POST(req) {
//   try {
//     const { username, email } = await req.json();  // Use req.json() to parse the request body

//     // Check if user already exists
//     const existingUser = await prisma.user.findFirst({
//       where: { OR: [{ username }, { email }] }
//     });

//     if (existingUser) {
//       return NextResponse.json({ error: 'User already exists' }, { status: 400 });  // Use NextResponse
//     }

//     // Create new user
//     const newUser = await prisma.user.create({
//       data: { username, email }
//     });

//     return NextResponse.json({ message: 'User created successfully', user: newUser }, { status: 201 });

//   } catch (error) {
//     return NextResponse.json({ error: 'Internal server error' }, { status: 500 });  // Use NextResponse
//   }
// }


import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { username, email } = await req.json(); // Parse JSON request body

    // Check if user already exists
    const existingUser = await prisma.user.findFirst({
      where: { OR: [{ username }, { email }] }
    });

    if (existingUser) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 });
    }

    // Create new user
    const newUser = await prisma.user.create({
      data: { username, email }
    });

    return NextResponse.json({ message: 'User created successfully', user: newUser }, { status: 201 });

  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

