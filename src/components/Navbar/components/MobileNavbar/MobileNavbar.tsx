"use client";
import React from "react";
import Image from "next/image";

export default function MobileNavbar() {
  return (
    <div className="lg:hidden flex ">
      <Image
        onClick={() => {
          const modal = document.getElementById(
            "mobile-nav-bar"
          ) as HTMLDialogElement | null;
          if (modal) {
            modal.showModal();
          }
        }}
        className=" h-[2.125rem]  w-[2.125rem] "
        src={"/assets/menu.svg"}
        width={50} // Set the width to match 3.125rem (80px)
        height={45.155} // Route of the image file
        alt={""}
        quality={95}
      />
    </div>
  );
}
