"use client"

import Link from 'next/link'
import { IoDocumentTextOutline } from "react-icons/io5";

// @ts-expect-error Type 'string' is not assignable to type 'string | undefined'.
function ListItem({ note }) {
  return (
    <>
      <Link href={`/notes/${note.id}`} className=" flex-col items-center justify-center bg-white border border-gray-200 rounded-lg shadow md:flex-row w-52 hover:bg-gray-100 mx-3 my-2 overflow-hidden pt-5">

        <IoDocumentTextOutline className='object-cover w-full rounded-lg h-28 md:w-48' />

        <div className="flex flex-col justify-between mt-4 py-1 bg-zinc-300 h-full leading-normal">
          <h5 className="text-lg font-bold tracking-tight text-gray-900 text-center">{note.title}</h5>
        </div>
      </Link>

    </>
  )
}

export default ListItem;
