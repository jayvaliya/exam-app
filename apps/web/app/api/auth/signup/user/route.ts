// api/signup/user/route.js
import { PrismaClient } from '@repo/db';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function POST(req: Request) {
    try {
        const { email, password, firstName, lastName } = await req.json();
        console.log(email, password, firstName, lastName);

        // Basic input validation
        if (!email || !password || !firstName || !lastName) {
            return new Response(
                JSON.stringify({ error: 'Email, password, first name and last name are required' }),
                {
                    status: 400,
                    headers: { 'Content-Type': 'application/json' },
                }
            );
        }

        // Check if user already exists
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });
        if (existingUser) {
            return new Response(
                JSON.stringify({ error: 'You are already a buyer.' }),
                {
                    status: 400,
                    headers: { 'Content-Type': 'application/json' },
                }
            );
        }

        // Check if seller already exists
        const existingSeller = await prisma.seller.findUnique({
            where: { email },
        });
        if (existingSeller) {
            return new Response(
                JSON.stringify({ error: 'You are already a Seller.' }),
                {
                    status: 400,
                    headers: { 'Content-Type': 'application/json' },
                }
            );
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                firstName,
                lastName
            },
        });

        // Respond with the created user (excluding password for security)
        const { password: _, ...userWithoutPassword } = user;

        // Create a response object
        const response = new Response(
            JSON.stringify({
                message: 'User created successfully',
                user: userWithoutPassword,
            }),
            {
                status: 201,
                headers: { 'Content-Type': 'application/json' },
            }
        );

        // // Set CORS headers
        // response.headers.set('Access-Control-Allow-Origin', '*'); // or specify your origin
        // response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        // response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

        return response;
    } catch (error) {
        console.error("Signup Error:", error);
        return new Response(
            JSON.stringify({ message: 'Internal server error' }),
            {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            }
        );
    }
}
