import React, { useEffect, useMemo, useState } from "react";
import "./PostContainer.scss";
import arr from "../img/arr.svg";
import loupe from "../img/loupe.svg";
import { useGetPagesArray } from "../hooks/pagination";
import { PostApi } from "../services/PostService";
import {
  getPageCount,
  getSearhedArr,
  getSeparationArr,
  getSortingArr,
} from "../utils/pages";
import PostItem from "./PostItem";
import { ESorting, IPost } from "../models/IPost";

function PostContainer() {
  const [sortind, setSortind] = useState<ESorting | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [totalPages, setTotalPages] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const { data, error, isLoading } = PostApi.useFetchAllPostsQuery(0);

  const pagesArrey = useGetPagesArray(totalPages);

  const dataSorting = useMemo(
    () => getSortingArr(data, sortind),
    [data, sortind]
  );
  const sortedAndSearhedPosts = useMemo(
    () => getSearhedArr(dataSorting, searchQuery),
    [searchQuery, dataSorting]
  );
  const posts = getSeparationArr(sortedAndSearhedPosts, limit, page);
  useEffect(() => {
    if (!isLoading && data?.length) {
      setTotalPages(getPageCount(data?.length, limit));
    }
  }, [isLoading]);

  return (
    <div>
      <div className="post">
        <div className="post__search">
          <input
            className="search__input"
            type="text"
            placeholder="Поиск"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <img src={loupe} alt="" />
        </div>
        <div className="post__rows">
          <div className="post-header">
            <div className="post-header__id ">
              <div
                className="post-header__item"
                onClick={() => setSortind(ESorting.id)}
              >
                <span>ID</span>
                <img src={arr} alt="arr" />
              </div>
            </div>
            <div className="post-header__title ">
              <div
                className="post-header__item"
                onClick={() => setSortind(ESorting.title)}
              >
                <span>Заголовок</span>
                <img src={arr} alt="arr" />
              </div>
            </div>
            <div className="post-header__text ">
              <div
                className="post-header__item"
                onClick={() => setSortind(ESorting.body)}
              >
                <span>Описание</span>
                <img src={arr} alt="arr" />
              </div>
            </div>
          </div>
          {isLoading && <h1>Идёт загрузка...</h1>}
          {error && <h1>Произошла ошибка при загрузке</h1>}
          {posts?.length === 0 && <h1>Посты не найдены!</h1>}
          {posts?.map((post) => (
            <PostItem post={post} key={post.id}></PostItem>
          ))}
        </div>
      </div>

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
            page === totalPages
              ? "pagination__next disabled"
              : "pagination__next"
          }
          onClick={() => setPage(page + 1)}
        >
          Далее
        </button>
      </div>
    </div>
  );
}

export default PostContainer;
