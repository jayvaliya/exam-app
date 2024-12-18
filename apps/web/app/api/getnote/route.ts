
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import nextAuthOptions from "../../../../../packages/utils/nextAuthOptions";

const prisma = new PrismaClient();

export async function POST(req: Request) {

    const session = await getServerSession(nextAuthOptions);
    if (!session) {
        return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
    }

    const { id } = await req.json();
    const note = await prisma.note.findUnique({ where: { id } });

    return NextResponse.json({ note }, { status: 200 });
}