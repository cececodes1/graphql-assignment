import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_POSTS = gql`
  query {
    posts {
      data {
        title
        body
      }
    }
  }
`;

const Posts: React.FC = () => {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.posts.data.map((post: any) => (
          <li key={post.title}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;

