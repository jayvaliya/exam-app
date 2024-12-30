import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { PrismaClient } from "@repo/db";
import nextAuthOptions from "../../../../../packages/utils/nextAuthOptions";

const prisma = new PrismaClient();

export async function POST(req: Request) {
    const session = await getServerSession(nextAuthOptions);
    console.log(session);

    if (!session || !session.user) {
        return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
    }

    const { data, title } = await req.json();

    if (!data || !title) {
        return NextResponse.json({ message: "Missing data or title" }, { status: 400 });
    }

    await prisma.note.create({
        data: {
            title,
            content: data,
            author: {
                connect: {
                    // @ts-ignore
                    id: session.user.id,
                },
            },
        },
    });

    return NextResponse.json({ message: "Note saved successfully" }, { status: 200 });
}