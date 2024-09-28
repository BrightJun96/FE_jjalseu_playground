"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

/**
 * @description
 * 쿼리스트링 설정 및 제거를 위한 훅입니다.
 */
const useQueryString = () => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathname = usePathname();
  const { replace } = useRouter();

  // 쿼리 스트리 조회
  function getQueryString(key: string): string | null {
    return searchParams.get(key);
  }

  // 쿼리 스트링 설정
  function setQueryString(key: string, value: string): void {
    params.set(key, value);
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  // 쿼리 스트링 제거
  function removeQueryString(key: string): void {
    params.delete(key);
    replace(`${pathname}?${params.toString()}`);
  }

  // 모든 쿼리 스트링 제거
  function removeAllQueryStrings(): void {
    const keys = Array.from(params.keys());
    for (const key of keys) {
      params.delete(key);
    }
    replace(`${pathname}`, { scroll: false });
  }

  return { getQueryString, setQueryString, removeQueryString, removeAllQueryStrings };
};

export default useQueryString;
