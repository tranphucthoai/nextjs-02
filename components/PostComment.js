import Image from "next/image";
import Link from "next/link";
import React from "react";

const PostComment = ({ data }) => {
  return (
    <article>
      {/* <div className="post__thumb">
        <Link>
          <a href="">
            <Image />
          </a>
        </Link>
      </div> */}
      <div className="post-text">
        <div className="post__name">{data.name} </div>
        <div className="post__email">{data.email}</div>
        <p className="post__des">{data.body}</p>
      </div>
    </article>
  );
};

export default PostComment;
