import { NextResponse } from "next/server";
import { PrismaClient } from "@repo/db";
import { getServerSession } from "next-auth";
import nextAuthOptions from "../../../../../packages/utils/nextAuthOptions";

export async function POST() {
    const prisma = new PrismaClient();
    const session = await getServerSession(nextAuthOptions);
    console.log(session);

    if (!session || !session.user) {
        return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
    }

    // @ts-expect-error Type 'string' is not assignable to type 'string | undefined'.
    const id = session.user.id;

    const notes = await prisma.note.findMany({
        where: { authorId: id },
        select: { id: true, title: true },
    });

    return NextResponse.json(notes, { status: 200 });
}