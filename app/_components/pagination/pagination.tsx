"use client";

import React from "react";
import useQueryString from "@/app/_utils/hooks/useQueryString";
import useHandlePagination from "@/app/_components/pagination/useHandlePagination";
import ArrowIcon from "@/app/_components/pagination/_icons/arrowIcon";

export interface PaginationProps {
  totalPage: number;
  queryKey?: string;
}

const Pagination = ({ totalPage, queryKey = "page" }: PaginationProps) => {
  const { setQueryString, getQueryString } = useQueryString();

  const currentPage = Number(getQueryString(queryKey) ?? 1);

  const { handlePrevious, handleNext, paginationNumbers } = useHandlePagination({ totalPage, queryKey });

  function handlePageChange(page: number | string) {
    if (typeof page === "number") {
      setQueryString(queryKey, page.toString());
    }
  }

  return (
    <div className={"flex items-center justify-center"}>
      {totalPage > 0 && (
        <div className={"flex max-w-[500px] items-center justify-center gap-1 sm:max-w-[164px]"}>
          {/* 이전 페이지로*/}
          {currentPage !== 1 && (
            <button
              onClick={handlePrevious}
              className="inline-flex min-h-[38px] min-w-[38px] items-center justify-center gap-x-2 rounded-lg px-2.5 py-2 text-sm text-achromatic-assistive focus:outline-none disabled:pointer-events-none disabled:opacity-50"
            >
              <ArrowIcon rotate={90} />
            </button>
          )}
          {paginationNumbers.map((page, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(page)}
              className={`${currentPage === page && "bg-primary-normal text-white"} flex h-[24px] w-[24px] items-center justify-center rounded-lg px-3 py-2 text-sm text-achromatic-assistive hover:bg-achromatic-darkAssistive`}
            >
              <span>{page}</span>
            </button>
          ))}
          {/*다음 페이지로*/}
          {currentPage !== totalPage && (
            <button
              onClick={handleNext}
              className="inline-flex min-h-[38px] min-w-[38px] items-center justify-center gap-x-2 rounded-lg px-2.5 py-2 text-sm text-achromatic-assistive focus:outline-none disabled:pointer-events-none disabled:opacity-50"
            >
              <ArrowIcon rotate={270} />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Pagination;
