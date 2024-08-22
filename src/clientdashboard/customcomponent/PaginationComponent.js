

import React from "react";
import { Pagination } from "antd";

const PaginationComponent = ({
  currentPage,
  pageSize,
  totalItems,
  onPageChange,
  total
}) => {
  return (
    <div className="flex justify-end items-center">
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={totalItems}
        onChange={onPageChange}
        
        showSizeChanger
        pageSizeOptions={["10", "20", "50"]}
      />
    </div>
  );
};

export default PaginationComponent;
