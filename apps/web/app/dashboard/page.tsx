// app/page.tsx

import { getServerSession } from "next-auth";
import { Toaster } from "react-hot-toast";
import { PrismaClient } from "@repo/db";
import Link from "next/link";
import { nextAuthOptions } from "../api/auth/[...nextauth]/options";

const prisma = new PrismaClient();

export default async function Home() {
    const session = await getServerSession(nextAuthOptions);
    const notes = await prisma.note.findMany({ where: { author: { id: session?.user?.id } } });
    return (
        <div className="flex flex-col p-10">
            <h1 className="text-3xl font-bold">Welcome to Noter!</h1>

            <p className="mt-4">
                This is a simple note-taking app built with Next.js, Next-Auth, and
                Prisma.
            </p>

            <h3>Your Notes</h3>
            {notes.length > 0 ? (
                notes.map((note) => (
                    <div key={note.id}>
                        <Link href={`/notes/${note.id}`}>{note.title}</Link>
                        <p>{note.content}</p>
                    </div>
                ))
            ) : (
                <p>No notes found</p>
            )}


            session: {JSON.stringify(session)}
            <Toaster />
        </div>
    );
}
