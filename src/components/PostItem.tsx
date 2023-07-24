import React from "react";
import "./PostItem.scss";
import { IPost } from "../models/IPost";

interface PostItemProps {
  post: IPost;
}

function PostItem({ post }: PostItemProps) {
  return (
    <div className="post__line">
      <div className="post-line__id">{post.id}</div>
      <div className="post-line__title">{post.title}</div>
      <div className="post-line__text">{post.body}</div>
    </div>
  );
}

export default PostItem;
