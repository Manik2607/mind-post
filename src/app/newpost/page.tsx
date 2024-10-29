"use client";
import React, { useState } from 'react';
import ReactQuill from 'react-quill-new';
import "react-quill-new/dist/quill.bubble.css";

export default function Newpost() {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div className="container mx-auto mt-8 p-4">
      <input
      type="text"
      placeholder="Title..."
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      className="w-full p-2 mb-4 blank text bg-transparent text-5xl rounded focus:outline-none"
      />
      <ReactQuill
      theme="bubble"
      value={value}
      onChange={setValue}
      placeholder='Write your Vlog body here...'
      className="mb-4 h-screen text-9xl"
      />
      <button className="w-full p-2 bg-blue-500 text-white rounded">Submit</button>
    </div>
  );
}
