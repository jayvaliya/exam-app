import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@repo/db";

const prisma = new PrismaClient();

type UserWithRole = {
    id: string;
    email: string;
    name: string;
    role: string;
};

export const nextAuthOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "email@example.com" },
                password: { label: "Password", type: "password", placeholder: "••••••••" }
            },
            async authorize(credentials) {
                if (!credentials) return null;

                const { email, password } = credentials;
                let user = null;
                let role = null;

                // First, check `user` table
                user = await prisma.user.findUnique({ where: { email } });

                if (user) {
                    role = "buyer";
                } else {
                    // If not found in `user`, check `seller` table
                    user = await prisma.seller.findUnique({ where: { email } });
                    if (user) {
                        role = "seller";
                    }
                }

                // If the user is not found in either table
                if (!user) return null;
                // console.log("user: ", user);

                // Validate the password
                const isValid = await bcrypt.compare(password, user.password);
                if (!isValid) return null;
                // toast("Login successful");

                // Return the user object with the role
                return { id: user.id, email: user.email, name: user.firstName, role } as UserWithRole;
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user && (user as UserWithRole).role) {
                token.id = user.id;
                token.role = (user as UserWithRole).role;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id;
                session.user.role = token.role;
            }
            return session;
        }
    },
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/login',
    },
};
