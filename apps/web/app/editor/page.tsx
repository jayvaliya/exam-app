"use client";

import React, { useEffect, useRef, useState } from 'react';
import EditorJS from '@editorjs/editorjs';
import BlackButton from '@repo/ui/black-button';
import axios from 'axios';
import editorOptions from './editorOptions';
import { redirect } from 'next/navigation'


function EditorPage() {
    const editorRef = useRef(null);
    const [title, setTitle] = useState('');

    useEffect(() => {
        if (!editorRef.current) {
            // @ts-ignore
            const editor = new EditorJS(editorOptions);
            // @ts-ignore
            editorRef.current = editor;
        }
    }, []);

    const handleSave = async () => {

        const editor = editorRef.current;

        if (editor) {
            // @ts-ignore
            const rawData = await editor.save();
            if (title.trim() == '' || rawData.blocks.length === 0) {
                alert('Please add a title and content before saving.');
                return;
            }
            const data = JSON.stringify(rawData);
            const response = (await axios.post('/api/savenote', { data, title }));

            if (response.status === 200) {
                return redirect('/dashboard');
            }
            else if (response.status === 401) {
                alert('Please log in to save a note.');
            }
        }
    };

    return (
        <div className="bg-transparent text-zinc-800 h-screen px-40 py-10">
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
        </div>
    );
}

export default EditorPage;