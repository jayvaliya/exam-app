"use client";

import React, { useEffect, useRef, useState } from 'react';
import EditorJS from '@editorjs/editorjs';
import editorOptions from './editorOptions';
import BlackButton from '@repo/ui/black-button';
import axios from 'axios';
import { titleState } from '@repo/store';
import { useRecoilState } from 'recoil';
import { useSession } from 'next-auth/react';
import { nextAuthOptions } from '../api/auth/[...nextauth]/options';
// import { nextAuthOptions } from '../api/auth/[...nextauth]/options';



function Page() {
    const editorRef = useRef(null);
    const [title, setTitle] = useRecoilState(titleState);


    useEffect(() => {
        // Initialize the EditorJS instance only once
        if (!editorRef.current) {
            const editor = new EditorJS(editorOptions);
            editorRef.current = editor;
        }
    }, []);

    const handleSave = async () => {



        const editor = editorRef.current;

        if (editor) {
            const rawData = await editor.save();
            if (title.trim() == '' || rawData.blocks.length === 0) {
                alert('Please add a title and content before saving.');
                return;
            }
            const data = JSON.stringify(rawData);
            const response = (await axios.post('/api/savenote', { data, title })).data;
            console.log(response);
        }
    };

    return (
        <div className="border bg-transparent text-zinc-800 h-screen px-40 py-10">
            {/* <div className="h-full rounded-2xl content"> */}
            <div className='flex mb-5 gap-2'>
                <input type="text" placeholder="Title..." className="px-3 py-4 placeholder-blueGray-300 text-blueGray-600 my-3 text-xl font-bold relative bg-zinc-50 border-[1px] border-[#ccc] rounded-xl shadow-sm outline-none focus:outline-none w-full" onChange={(e) => setTitle(e.target.value)} />
                <BlackButton text="Save" className="my-4 rounded-xl" onClick={handleSave} />
            </div>

            {/* The container for the editor. */}
            <div
                className='bg-zinc-50 rounded-xl'
                id="editorjs" // This will be the container for the editor
                style={{ border: '1px solid #ccc', padding: '10px', minHeight: '300px' }}
            />
            {/* </div> */}
        </div>
    );
}

export default Page;
