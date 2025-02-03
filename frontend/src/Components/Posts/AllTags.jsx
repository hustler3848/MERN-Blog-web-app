import React, { useState, useEffect } from "react";

function AllTags() {
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await fetch("/api/tags");
        const data = await response.json();
        setTags(data.tags);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch tags");
        setLoading(false);
      }
    };

    fetchTags();
  }, []);

  if (loading) return <p>Loading tags...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div className="tags-list my-4">
      <div className="flex commentHeader flex-row items-center justify-start w-full">
        <h2 className="uppercase dark:text-white bg-zinc-200 text-black dark:bg-gray-900 pl-4 py-1 pr-5 dmSans rounded-sm font-bold text-xs flex flex-row items-center justify-center">
          All Tags
        </h2>
        <hr className="h-[3px] flex-grow bg-rose-500 dark:bg-red-700" />
      </div>
      <ul className="flex flex-row flex-wrap gap-2 my-4">
        {/* {tags.map((tag, index) => (
          <li key={index} className="tag-item bg-gray-200 cursor-pointer hover:bg-emerald-500 text-sm inter hover:text-white px-2 py-1 ">
            {tag} ()
          </li>
        ))} */}
        {tags.map(({ tag, count }) => (
          <li key={tag} className="tag-item bg-gray-200 cursor-pointer hover:bg-rose-500 text-xs inter hover:text-white px-2 py-1 ">
            {tag} ({count})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllTags;
