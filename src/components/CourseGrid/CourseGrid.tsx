import React, { useState, useEffect } from "react";

import { Pagination } from "antd";

import CourseCard from "../CourseCard/CourseCard";

interface CourseGridProps {
  data: {
    id: number;
    title: string;
    type: string;
    semester: string;
    teacher: {
      matter: string;
    };
  }[];
}


const CourseGrid: React.FC<CourseGridProps> = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5; // Number of items per page

  // Update currentPage to 1 whenever a filter is changed
  const handleFilterChange = () => {
    setCurrentPage(1);
  };

  useEffect(() => {
    handleFilterChange();
  }, [data]); // Reset currentPage whenever data changes

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

  const renderData = data.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div>
      {renderData.map((item, idx) => (
        <CourseCard
          key={idx}
          title={item.title}
          matter={item.teacher.matter}
          semester={item.semester}
          type={item.type}
        />
      ))}
      <div className="text-right mt-4">
        <Pagination
          current={currentPage}
          total={data.length}
          pageSize={pageSize}
          onChange={handleChangePage}
        />
      </div>
    </div>
  );
};

export default CourseGrid;
