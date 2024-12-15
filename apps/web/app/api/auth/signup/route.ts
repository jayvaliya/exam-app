// api/signup/seller/route.ts
import { PrismaClient } from '@repo/db';
import bcrypt from 'bcryptjs';
import { uploadFile } from '@repo/utils';

const prisma = new PrismaClient();

export async function POST(req: Request) {
    try {
        console.log('POST request received');

        const formData = await req.formData();

        const email = formData.get("email")?.toString();
        const password = formData.get("password")?.toString();
        const firstName = formData.get("firstName")?.toString();
        const lastName = formData.get("lastName")?.toString();
        const profilePicture = formData.get("profilePicture") as File;

        // Basic input validation
        if (!email || !password || !firstName || !lastName) {
            return new Response(
                JSON.stringify({ message: 'All required fields (email, password, firstName, lastName) must be filled' }),
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
                JSON.stringify({ error: 'Email already exists' }),
                {
                    status: 400,
                    headers: { 'Content-Type': 'application/json' },
                }
            );
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Upload profile picture to R2
        const profilePictureUrl = profilePicture ? await uploadFile(profilePicture) : "";

        // Create the user
        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                firstName,
                lastName,
                profilePicture: profilePictureUrl,
            },
        });

        // Exclude password from the response
        const { password: _, ...userWithoutPassword } = user;

        // Respond with the created user
        return new Response(
            JSON.stringify({
                message: 'User created successfully',
                user: userWithoutPassword,
            }),
            {
                status: 201,
                headers: { 'Content-Type': 'application/json' },
            }
        );
    } catch (error) {
        console.error('Signup Error:', error);
        return new Response(
            JSON.stringify({ message: 'Internal server error', error: error || '' }),
            {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            }
        );
    }
}
