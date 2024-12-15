import { PrismaClient } from '@repo/db';
import { useRouter } from 'next/router';
import React from 'react'

const prisma = new PrismaClient();

async function page({ params }: { params: { id: string } }) {

    const id = params.id;

    const note = await prisma.note.findUnique({ where: { id: id as string } });

    if (!note) return <div>
        <h1>Note not found</h1>
    </div>


    return (
        <div>
            <h1>{note?.title}</h1>
            <p>{note?.content}</p>
            {JSON.stringify(note)}
        </div>
    )
}

export default page
