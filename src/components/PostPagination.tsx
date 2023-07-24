import React from "react";
import "./PostPagination.scss";
interface PostPaginationProps {
  page: number;
  setPage: (x: number) => void;
  pagesArrey: number[];
  totalPages: number;
}

function PostPagination({
  page,
  setPage,
  pagesArrey,
  totalPages,
}: PostPaginationProps) {
  return (
    <div className="pagination">
      <button
        className={
          page === 1 ? "pagination__prev disabled" : "pagination__prev"
        }
        onClick={() => setPage(page - 1)}
      >
        Назад
      </button>
      <div className="pagination__rooms">
        {pagesArrey.map((p) => (
          <button
            onClick={() => setPage(p)}
            className={
              page === p
                ? "pagination__number pagination__number-green"
                : "pagination__number"
            }
            key={p}
          >
            {p}
          </button>
        ))}
      </div>
      <button
        className={
          page === totalPages ? "pagination__next disabled" : "pagination__next"
        }
        onClick={() => setPage(page + 1)}
      >
        Далее
      </button>
    </div>
  );
}

export default PostPagination;
