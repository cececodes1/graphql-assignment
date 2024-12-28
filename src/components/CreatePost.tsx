import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const UPDATE_POST = gql`
  mutation UpdatePost($id: ID!, $title: String!, $body: String!) {
    updatePost(id: $id, input: { title: $title, body: $body }) {
      id
      title
      body
    }
  }
`;

const DELETE_POST = gql`
  mutation DeletePost($id: ID!) {
    deletePost(id: $id)
  }
`;



const CreatePost: React.FC = () => {
  const [createPost] = useMutation(UPDATE_POST);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createPost({ variables: { title, body, userId: parseInt(userId) } });
    alert("Post created!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder="Body" />
      <input value={userId} onChange={(e) => setUserId(e.target.value)} placeholder="User ID" />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePost;
