import { useMemo } from "react";
import { ESorting, IPost, EPost } from "../models/IPost";

export const getPageCount = (totalCount: number, limit: number) => {
  return Math.ceil(totalCount / limit);
};
export const getSortingArr = (
  data: IPost[] | undefined,
  sortind: ESorting | null
) => {
  if (sortind === null || data === undefined) return data;

  if (sortind === ESorting.title || sortind === ESorting.body) {
    return [...data]?.sort((a, b) => a[sortind].localeCompare(b[sortind]));
  } else if (sortind === ESorting.id) {
    return [...data]?.sort((a, b) => a[sortind] - b[sortind]);
  }
};

export const getSearhedArr = (
  dataSorting: IPost[] | undefined,
  searchQuery: string
) =>
  dataSorting?.filter(
    (post) =>
      post.title
        .toLocaleLowerCase()
        .includes(searchQuery.toLocaleLowerCase()) ||
      post.body.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()) ||
      post.id === Number(searchQuery)
  );

export const getSeparationArr = (
  data: IPost[] | undefined,
  limit: number,
  page: number
) => {
  const end = limit * page;
  const start = limit * (page - 1);
  const rez = data?.slice(start, end);
  return rez;
};
