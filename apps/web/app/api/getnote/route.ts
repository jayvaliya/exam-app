import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import nextAuthOptions from "../../../../../packages/utils/nextAuthOptions";

const prisma = new PrismaClient();

export async function POST(req: Request) {
    // Attempt to get the authenticated user's session
    const session = await getServerSession(nextAuthOptions);

    const { id } = await req.json();

    // Fetch the note with its authorId and published status
    const note = await prisma.note.findUnique({
        where: { id },
        select: {
            id: true,
            title: true,
            content: true,
            published: true,
            authorId: true,
        },
    });

    // Check if the note exists
    if (!note) {
        return NextResponse.json({ message: "Note not found" }, { status: 404 });
    }

    // If the user is not authenticated, allow access only if the note is published
    if (!session) {
        if (!note.published) {
            return NextResponse.json(
                { message: "Access denied. Note is not published." },
                { status: 403 }
            );
        }
        return NextResponse.json({ note }, { status: 200 });
    }

    // If the user is authenticated, allow access if they own the note or if it is published

    // @ts-expect-error @typescript-eslint/no-unsafe-member-access
    const isOwner = note.authorId === session.user.id;
    if (!isOwner && !note.published) {
        return NextResponse.json(
            { message: "Access denied. Note is not published." },
            { status: 403 }
        );
    }

    // Return the note
    return NextResponse.json({ note }, { status: 200 });
}
