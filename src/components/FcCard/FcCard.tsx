import React from "react";

interface FcCardProps {
  title: string;
  type: string;
  credits: number;
  semestre: string;
}

const FcCard: React.FC<FcCardProps> = ({
  title,
  type,
  credits,
  semestre,
}: FcCardProps) => {
  return (
    <div>
      <div className="max-w-4xl px-10 my-4 py-6 bg-white rounded-lg shadow-md mb-4">
        <div className="flex  lg:justify-between lg:items-center flex-col-reverse lg:flex-row">
          <span className="font-light text-gray-600">{semestre}</span>
          <div className="px-2 py-1 bg-sky-500 text-gray-100 font-bold rounded hover:bg-sky-600">
            {title}
          </div>
        </div>
        <div className="mt-2">
          <div className="text-2xl text-gray-700 font-bold hover:text-gray-600">
            {type}
          </div>
          <p className="mt-2 text-gray-600">{credits} credits</p>
        </div>
        <div className="flex justify-between items-center mt-4"></div>
      </div>
    </div>
  );
};

export default FcCard;
