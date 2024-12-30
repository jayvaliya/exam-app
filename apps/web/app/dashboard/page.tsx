// app/dashboard/page.tsx

import { getServerSession } from "next-auth";
import { Toaster } from "react-hot-toast";
import { PrismaClient } from "@repo/db";
import nextAuthOptions from "../../../../packages/utils/nextAuthOptions";
import ListItem from "@repo/ui/list-item";
import Link from "next/link";
import { AiFillFileText } from "react-icons/ai";
import { FaFolderOpen } from "react-icons/fa";

const prisma = new PrismaClient();

export default async function Home({ searchParams }: { searchParams: { popup?: string } }) {
    const session = await getServerSession(nextAuthOptions);

    if (!session?.user) {
        return (
            <div>
                <h1>Access Denied Login or Signup First</h1>
            </div>
        );
    }

    const notes = await prisma.note.findMany({
        // @ts-expect-error Property 'user' does not exist on type 'Session'.
        where: { author: { id: session?.user?.id } },
        select: { id: true, title: true },
    });

    const isPopupVisible = searchParams.popup === "new-folder";

    return (
        <div className="flex flex-col p-10 relative">
            <span className="text-4xl font-bold font-mono bg-orange-200 w-fit px-2 py-1 rounded">
                Write, Share, Collaborate!
            </span>

            <h1 className="text-3xl font-semibold mt-5 my-5">Your Notes</h1>
            <div className="flex">
                {notes.length > 0 ? (
                    notes.map((note) => <ListItem key={note.id} note={note} />)
                ) : (
                    <p>No notes found</p>
                )}
            </div>
            <div className="mt-10 flex gap-3">
                <Link href="/editor">
                    <div className="w-48 h-24 bg-blue-500 rounded-lg shadow-md flex flex-col justify-center items-center text-white hover:shadow-lg transition-shadow">
                        <AiFillFileText className="text-5xl mb-2 opacity-90" />
                        <p className="text-lg font-medium">+ Doc</p>
                    </div>
                </Link>

                <Link href="?popup=new-folder">
                    <div className="w-48 h-24 bg-zinc-500 rounded-lg shadow-md flex flex-col justify-center items-center text-white hover:shadow-lg transition-shadow">
                        <FaFolderOpen className="text-5xl mb-2 opacity-90" />
                        <p className="text-lg font-medium">+ Folder</p>
                    </div>
                </Link>
            </div>

            {/* Popup */}
            {isPopupVisible && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-5 rounded shadow-lg w-1/3">
                        <h2 className="text-xl font-bold mb-4">Create New Folder</h2>
                        <form method="POST" action="/api/newfolder">
                            <input
                                type="text"
                                name="folderName"
                                placeholder="Folder Name"
                                className="w-full px-3 py-2 border rounded mb-4"
                            />
                            <div className="flex justify-end gap-2">
                                <Link href="/dashboard">
                                    <button
                                        type="button"
                                        className="px-4 py-2 bg-gray-500 text-white rounded"
                                    >
                                        Cancel
                                    </button>
                                </Link>
                                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
                                    Create
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            <Toaster />
        </div>
    );
}
