import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@repo/db";

const prisma = new PrismaClient();

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

                const user = await prisma.user.findUnique({ where: { email } });

                if (!user) return null;

                // Validate the password
                const isValid = await bcrypt.compare(password, user.password);
                if (!isValid) return null;

                return {
                    id: user.id,
                    email: user.email,
                    name: user.firstName,
                    profilePicture: user.profilePicture
                };
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token, user }) {
            if (token) {
                session.user = {
                    ...session.user,
                    id: token.id as string,
                };
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
