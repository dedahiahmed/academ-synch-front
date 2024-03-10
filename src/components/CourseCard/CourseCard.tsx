import React from "react";

interface CourseCardProps {
  title: string;
  type: string;
  semester: string;
  matter: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  type,
  semester,
  matter,
}) => {
  const convertSemesterLabel = (sem: string) => {
    switch (sem) {
      case "S1":
        return "1ère semestre";
      case "S2":
        return "2ème semestre";
      case "S3":
        return "3ème semestre";
      default:
        return sem;
    }
  };

  return (
    <div>
      <div className="max-w-4xl px-10 my-4 py-6 bg-white rounded-lg shadow-md mb-4">
        <div className="flex  lg:justify-between lg:items-center flex-col-reverse lg:flex-row">
          <span className="font-light text-gray-600">
            {convertSemesterLabel(semester)}
          </span>
          <div className="px-2 py-1 bg-sky-500 text-gray-100 font-bold rounded hover:bg-sky-600">
            {title}
          </div>
        </div>
        <div className="mt-2">
          <div className="bg-sky-300 text-gray-100 font-bold rounded px-2 py-1 inline-block mt-2">
            Type: {type}
          </div>
          <div className="bg-sky-300 text-gray-100 font-bold rounded px-2 py-1 inline-block mt-2">
            Matter: {matter}
          </div>
        </div>
        <div className="flex justify-between items-center mt-4"></div>
      </div>
    </div>
  );
};

export default CourseCard;
