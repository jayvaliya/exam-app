"use client"

import Link from 'next/link'
import React from 'react'
import { CgNotes } from 'react-icons/cg'
import { RxDotsVertical } from "react-icons/rx";

function ListItem({ note }: any) {
    return (
        <div key={note.id} className="bg-zinc-50 rounded-xl flex gap-5 justify-between items-center text-base font-semibold max-w-[35%] shadow mb-2">
            <div className='flex items-center gap-2 w-full h-full'>
                <Link href={`/notes/${note.id}`} className='flex px-3 py-3 items-center gap-3 w-full h-full'>
                    <CgNotes className="h-6 w-6" />
                    {note.title}
                </Link>
            </div>
            {/* <button onClick={() => { console.log('clicked') }}> */}
            <RxDotsVertical className="h-6 w-6 mr-3" />
            {/* </button> */}

        </div>
    )
}

export default ListItem;
