"use client";

import React, { useState } from "react";
import { BsGlobeAsiaAustralia } from "react-icons/bs";

function PublishPage() {
    const [noteId, setNoteId] = useState("");
    const [title, setTitle] = useState("");
    const [subject, setSubject] = useState("");
    const [tags, setTags] = useState([]);
    const [tagInput, setTagInput] = useState("");

    const handleAddTag = () => {
        if (tagInput.trim() && tags.length < 5) {
            setTags([...tags, tagInput.trim()]);
            setTagInput("");
        }
    };

    const handleRemoveTag = (index) => {
        setTags(tags.filter((_, i) => i !== index));
    };

    const handlePublish = () => {
        if (!noteId || !title || !subject || tags.length === 0) {
            alert("Please fill all fields and add at least one tag.");
            return;
        }
        console.log("Publishing note with data:", { noteId, title, subject, tags });
        // Call API to publish the note
    };

    return (
        <div className="p-10">
            <div className="text-3xl font-bold font-mono mb-8 text-center">
                Share your Knowledge with the W
                <BsGlobeAsiaAustralia className="text-base inline" />
                rld ;{")"}
            </div>
            <form
                className="bg-zinc-50 shadow-md rounded-xl p-6 space-y-6 max-w-xl mx-auto"
                onSubmit={(e) => {
                    e.preventDefault();
                    handlePublish();
                }}
            >
                <div>
                    <label className="block text-lg font-medium mb-2">Select Note</label>
                    <input
                        type="text"
                        placeholder="Enter Note ID"
                        value={noteId}
                        onChange={(e) => setNoteId(e.target.value)}
                        className="w-full border border-zinc-300 rounded p-2 focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-lg font-medium mb-2">Title</label>
                    <input
                        type="text"
                        placeholder="Enter title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full border border-zinc-300 rounded p-2 focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-lg font-medium mb-2">Subject</label>
                    <input
                        type="text"
                        placeholder="Enter subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full border border-zinc-300 rounded p-2 focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-lg font-medium mb-2">Tags</label>
                    <div className="flex items-center space-x-2">
                        <input
                            type="text"
                            placeholder="Add a tag"
                            value={tagInput}
                            onChange={(e) => setTagInput(e.target.value)}
                            className="flex-1 border border-zinc-300 rounded-full p-2 focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="button"
                            onClick={handleAddTag}
                            className="px-4 py-2 bg-zinc-700 text-white rounded-full shadow hover:bg-zinc-600"
                            disabled={tags.length >= 5}
                        >
                            Add
                        </button>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-gray-300 text-gray-800 rounded-full flex items-center space-x-2"
                            >
                                <span>{tag}</span>
                                <button
                                    type="button"
                                    onClick={() => handleRemoveTag(index)}
                                    className="text-red-500 hover:text-red-600"
                                >
                                    &times;
                                </button>
                            </span>
                        ))}
                    </div>
                    {tags.length >= 5 && (
                        <p className="text-sm text-red-500 mt-1">Maximum 5 tags allowed</p>
                    )}
                </div>
                <button
                    type="submit"
                    className="w-full text-white bg-zinc-950 hover:bg-zinc-800 font-medium py-2 rounded-full shadow"
                >
                    Publish
                </button>
            </form>
        </div>
    );
}

export default PublishPage;
