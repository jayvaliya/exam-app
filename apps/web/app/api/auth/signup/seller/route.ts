// api/signup/seller/route.ts
import { PrismaClient } from '@repo/db';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function POST(req: Request) {
    try {
        const { email, password, firstName, lastName, storeName } = await req.json();
        console.log(email, password, firstName, lastName, storeName);

        // Basic input validation
        if (!email || !password || !firstName || !lastName || !storeName) {
            return new Response(
                JSON.stringify({ message: 'Email, password, first name, last name and store name are required' }),
                {
                    status: 400,
                    headers: { 'Content-Type': 'application/json' },
                }
            );
        }

        // Check if user already exists
        const existingSeller = await prisma.user.findUnique({
            where: { email },
        });
        if (existingSeller) {
            return new Response(
                JSON.stringify({ error: 'Email already exists' }),
                {
                    status: 400,
                    headers: { 'Content-Type': 'application/json' },
                }
            );
        }

        // Check if seller already exists
        const existingUser = await prisma.seller.findUnique({
            where: { email },
        });
        if (existingUser) {
            return new Response(
                JSON.stringify({ error: 'You are already a Buyer.' }),
                {
                    status: 400,
                    headers: { 'Content-Type': 'application/json' },
                }
            );
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const seller = await prisma.seller.create({
            data: {
                email,
                password: hashedPassword,
                firstName,
                lastName,
                storeName
            },
        });

        // Respond with the created user (excluding password for security)
        const { password: _, ...userWithoutPassword } = seller;

        // Create a response object
        const response = new Response(
            JSON.stringify({
                message: 'Seller created successfully',
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
