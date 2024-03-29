import React from "react";

export default function HomeSearch() {
  return (
    <div className="flex items-center border-b-2 mr-[3rem]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 pt-0.5 text-gray-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        className="ml-2 outline-none bg-transparent "
        type="text"
        name="search"
        id="search"
        placeholder="Search..."
      />
    </div>
  );
}
