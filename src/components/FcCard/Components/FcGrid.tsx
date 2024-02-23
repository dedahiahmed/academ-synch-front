import React, { useState, useEffect } from "react";

import { Pagination } from "antd";
import FcCard from "../FcCard";

interface FcGridProps {
  data: {
    semestre: string;
    intitulé_du_module: string;
    type_du_module: string;
    credits: number;
  }[];
}

const FcGrid: React.FC<FcGridProps> = ({ data }) => {
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
        <FcCard
          key={idx}
          title={item.intitulé_du_module}
          type={item.type_du_module}
          credits={item.credits}
          semestre={item.semestre}
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

export default FcGrid;
