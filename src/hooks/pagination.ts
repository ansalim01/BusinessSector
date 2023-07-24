import { useMemo } from "react";

export const useGetPagesArray = (totalPages: number) =>
  useMemo(() => {
    let rez = [];
    for (let i = 0; i < totalPages; i++) {
      rez.push(i + 1);
    }
    return rez;
  }, [totalPages]);
