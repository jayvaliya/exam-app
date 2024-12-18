"use client";

import React, { useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import axios from "axios";
import BlackButton from "@repo/ui/black-button";
import Modal from "@repo/ui/modal";
const NLPCloudClient = require('nlpcloud');

const client = new NLPCloudClient({ model: 'bart-large-cnn', token: 'ebbed49b2a61c533caf5ad4b494b039411e336a9' });

function Page({ params }: { params: { id: string } }) {
    const { id } = params;
    const [note, setNote] = useState<any>(null);
    const [showModal, setShowModal] = useState(false);
    const [summary, setSummary] = useState("");

    const editorRef = useRef<EditorJS | null>(null);

    useEffect(() => {
        const fetchNote = async () => {
            try {
                const response = await axios.post("/api/getnote", { id });
                setNote(response.data.note);
            } catch (error) {
                console.error("Error fetching note:", error);
            }
        };

        fetchNote();
    }, [id]);

    useEffect(() => {
        if (note && !editorRef.current) {
            try {
                const content = JSON.parse(note.content);

                const editor = new EditorJS({
                    holder: "editorjs",
                    data: content,
                    readOnly: true,
                    tools: {
                        header: require("@editorjs/header"),
                        list: require("@editorjs/list"),
                        quote: require("@editorjs/quote"),
                        image: require("@editorjs/image"),
                        code: require("@editorjs/code"),
                    },
                });

                editorRef.current = editor;
            } catch (error) {
                console.error("Error initializing Editor.js:", error);
            }
        }
    }, [note]);

    function extractTextFromEditorJs(editorData: any) {
        return editorData.blocks
            .map((block: any) => {
                switch (block.type) {
                    case "paragraph":
                    case "header":
                        return block.data.text;
                    case "list":
                        return block.data.items.join(" ");
                    case "image":
                        return block.data.caption || ""; // Include caption if present
                    case "attaches":
                        return block.data.title || ""; // Include title if present
                    default:
                        return ""; // Skip unsupported block types
                }
            })
            .filter(Boolean) // Remove empty strings
            .join(" ");
    }

    const summarize = async () => {
        try {
            const parsedContent = JSON.parse(note.content);
            const extractedText = extractTextFromEditorJs(parsedContent);

            client.summarization({ text: extractedText })
                .then(function (response: any) {
                    setSummary(response.data.summary_text);
                })
                .catch(function (err: any) {
                    console.error(err.response.status);
                    console.error(err.response.data.detail);
                });

        } catch (error) {
            console.error("Error summarizing text:", error);
        }
    };

    if (!note) {
        return (
            <div className="flex justify-center items-center mt-40">
                <h1>Loading...</h1>
            </div>
        );
    }

    return (
        <div className="p-6 md:mx-[10%]">
            <h1 className="md:ml-[10%] mt-5 text-3xl font-bold mb-4">
                {note.title}
            </h1>
            <div
                id="editorjs"
                className="border border-gray-300 rounded p-4"
                style={{ minHeight: "300px" }}
            ></div>

            <BlackButton text="Save a Copy" onClick={() => setShowModal(true)} />
            {summary == "" ?
                <BlackButton text="Summary" onClick={summarize} />
                : ''}

            <small className="text-gray-500 mt-4 block">
                Created at: {new Date(note.createdAt).toLocaleString()}
            </small>
            {summary && (
                <div className="mt-4">
                    <h2 className="text-2xl font-bold">Summary</h2>
                    <p>{summary}</p>
                </div>
            )}

            <Modal
                show={showModal}
                title="Confirm"
                message="Are you sure you want to Confirm?"
                onClose={() => setShowModal(false)}
                onConfirm={() => setShowModal(false)}
                actionText="confirm text"
            />
        </div>
    );
}

export default Page;
