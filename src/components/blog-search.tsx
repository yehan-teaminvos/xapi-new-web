"use client";
import React from "react";

import { useState } from "react";
import { blogCards } from "@/data/blog-details";

export default function BlogSearch() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBlogs = blogCards.filter((blog) =>
    [blog.title, blog.summary, blog.author]
      .join(" ")
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <input
        type="text"
        placeholder="Search by title, summary, or author..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full border p-2 rounded mb-4"
      />

      {filteredBlogs.length === 0 && (
        <p className="text-gray-500">No results found.</p>
      )}

      <ul className="space-y-4">
        {filteredBlogs.map((blog, idx) => (
          <li key={idx} className="border p-3 rounded bg-white shadow">
            <h2 className="text-lg font-semibold">{blog.title}</h2>
            <p className="text-sm text-gray-700">{blog.summary}</p>
            <p className="text-xs text-gray-500 mt-1">By {blog.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
