import React from "react";
import { HiOutlineLogout } from "react-icons/hi";
import Cookies from "js-cookie";

export default function Logout() {
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    Cookies.remove("accessToken");
    // Redirect the user to a logout success page
    // window.location.href = "/"; // Replace with the appropriate URL
  };

  return (
    <button
      onClick={handleLogout}
      className="hidden md:inline-block lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200"
    >
      <HiOutlineLogout className="inline-block mr-2" />
      Se déconnecter
    </button>
  );
}
