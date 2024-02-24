"use client";
import { MdPictureAsPdf } from "react-icons/md";
export default function FilesLister({
  filesList,
}: Readonly<{
  filesList: file[];
}>) {
  const handleButtonClick = (fileUrl: string) => {
    window.open(fileUrl, "_blank");
  };
  return (
    <div className="mb-[1.25rem] flex gap-x-[0.7rem] gap-y-[0.5rem] flex-wrap w-[100%]">
      {filesList.map((file, index) => (
        <button
          className="items-center group  hover:bg-cblue flex  px-[1.25rem] py-[0.62rem] font-text border border-cblue rounded-[0.5rem] text-[#767676]"
          key={index}
          onClick={() => handleButtonClick(file.link)}
        >
          <MdPictureAsPdf className=" w-[1.125rem] mr-[1rem] text-cblue group-hover:text-white " />

          <p className="text-cblue group-hover:text-white">{file.title}</p>
        </button>
      ))}
    </div>
  );
}
