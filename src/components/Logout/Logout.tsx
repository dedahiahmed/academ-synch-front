import React from "react";

import { HiOutlineLogout } from "react-icons/hi";

export default function Logout() {
  return (
    <button className="flex items-center justify-center border-none bg-transparent cursor-pointer text-blue-400 text-[2rem]">
      <HiOutlineLogout />
    </button>
  );
}
