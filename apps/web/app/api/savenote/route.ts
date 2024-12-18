import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { PrismaClient } from "@repo/db";
import nextAuthOptions from "../../../../../packages/utils/nextAuthOptions";

const prisma = new PrismaClient();

export async function POST(req: Request) {
    const session = await getServerSession(nextAuthOptions);
    console.log(session);

    if (!session) {
        return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
    }

    const { data, title } = await req.json();

    const note = await prisma.note.create({
        data: {
            title,
            content: data,
            author: {
                connect: {
                    id: session.user.id,
                },
            },
        },
    });


    return NextResponse.json({ message: "Note saved successfully" }, { status: 200 });
}
