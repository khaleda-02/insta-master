import React from "react";
const PaginationComp = ({
  postsPerPage,
  totalPosts,
  setCurrentPage,
  currentPage,
}) => {
  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="btn-group hd flex items-center justify-center">
      {pageNumbers.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={`btn  ${page === currentPage ? "btn-active" : ""} `}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};
export default PaginationComp;
