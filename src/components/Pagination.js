import React from "react";

const Pagination = ({ pages,currentPage,updateCurrentPage }) => {
  return (
    <div className="mt-2 flex">
      {pages.map((page) => (
        <div className={`border p-1 justify-center align-middle border-spacing-1 ${currentPage===page? 'bg-red-400':''} `}>
          <button onClick={() =>updateCurrentPage(page)}>{page}</button>
        </div>
      ))}
    </div>
  );
};

export default Pagination;
