"use client"

import  { useState } from "react";

const useCopyClipBoard = () => {
  const [isCopied, setIsCopied] = useState(false);
  /**
   * 클립보드에 복사하기
   */
  async function copyToClipboard(text:string) {
    await navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);

  }
  return {copyToClipboard,isCopied}
};

export default useCopyClipBoard;
