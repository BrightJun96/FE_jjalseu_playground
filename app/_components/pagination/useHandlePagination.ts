"use client";

import { useEffect, useState } from "react";
import {PaginationProps} from "@/app/_components/pagination/pagination";
import useQueryString from "@/app/_utils/hooks/useQueryString";

const useHandlePagination = ({ totalPage, queryKey = "page" }: PaginationProps) => {
  const { getQueryString, setQueryString } = useQueryString();

  // 페이지 변경 핸들러
  // 현재 페이지
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    // Get current page from query string on mount
    const page = Number(getQueryString(queryKey) ?? 1);
    setCurrentPage(page);
  }, [getQueryString, queryKey]);

  function handlePrevious() {
    if (currentPage === 1) return;
    setQueryString(queryKey, String(currentPage - 1));
  }

  function handleNext() {
    if (currentPage === totalPage) return;
    setQueryString(queryKey, String(currentPage + 1));
  }

  const getPaginationNumbers = () => {
    const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;
    const maxPages = isMobile ? 5 : 10;
    let numbers = [];

    if (totalPage <= maxPages) {
      numbers = Array.from({ length: totalPage }, (_, i) => i + 1);
    } else {
      const startPage = Math.max(currentPage - Math.floor(maxPages / 2), 1);
      const endPage = Math.min(startPage + maxPages - 1, totalPage);

      for (let i = startPage; i <= endPage; i++) {
        numbers.push(i);
      }
    }

    return numbers;
  };

  const paginationNumbers = getPaginationNumbers();

  return { handlePrevious, handleNext, paginationNumbers };
};

export default useHandlePagination;
