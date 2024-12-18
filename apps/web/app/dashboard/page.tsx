// app/page.tsx

import { getServerSession } from "next-auth";
import { Toaster } from "react-hot-toast";
import { PrismaClient } from "@repo/db";
import nextAuthOptions from "@repo/utils";
import ListItem from "./ListItem";

const prisma = new PrismaClient();

export default async function Home() {
    const session = await getServerSession(nextAuthOptions);
    const notes = await prisma.note.findMany({ where: { author: { id: session?.user?.id } } });

    return (
        <div className="flex flex-col p-10">
            <h1 className="text-3xl font-bold">Write, Share, Collaborate!</h1>

            <h3 className="text-xl font-semibold mt-10 my-5">Your Notes</h3>
            {notes.length > 0 ? (
                notes.map((note) => (
                    <ListItem key={note.id} note={note} />
                ))
            ) : (
                <p>No notes found</p>
            )}


            {/* session: {JSON.stringify(session)} */}
            <Toaster />
        </div>
    );
}
