import React from "react";

const Posts = (props) => {
  const { user } = props;
  return (
    <div className="posts">
      {user.post.map((posts) => {
        return (
          <div className="posts__picture">
            <img src={posts} />
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
