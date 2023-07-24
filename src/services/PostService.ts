import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IPost } from "../models/IPost";

interface TFetchAllPosts {
  page: number;
  limit: number;
}

export const PostApi = createApi({
  reducerPath: "PostApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),

  endpoints: (build) => ({
    fetchAllPosts: build.query<IPost[], number>({
      query: () => ({
        url: "/posts",
        params: {
          // _page: page,
          // _limit: limit,
        },
      }),
      // transformResponse(posts: IPost[], meta) {
      //   return {
      //     posts,
      //     totalCount: Number(meta?.response?.headers.get("X-Total-Count")),
      //   };
      // },
    }),
  }),
});
