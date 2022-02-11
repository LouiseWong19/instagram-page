import React from "react";
import "./Posts.scss";

const Posts = (props) => {
  const { user } = props;

  const posts = user.post.map((posts, index) => (
    <div key={index} className="posts__picture">
      <img src={posts} />
    </div>
  ));

  return <div className="posts">{posts}</div>;
};

export default Posts;
