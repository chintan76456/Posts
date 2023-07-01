import React, { useState, useEffect } from "react";
import "./styles.css";
import Table from "./components/Table";
import axios from "axios";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [postId, setPostId] = useState();
  const columnInfo = ["ID", "Title", "Body", "User Id"];
  const commentsColumnInfo = ["ID", "Body"];
  const getPosts = () => {
    axios
      .get("https://dummyjson.com/posts")
      .then((res) => {
        setPosts(res?.data?.posts);
      })
      .catch((err) => console.log(err.message));
  };

  const getCommentsById = (val) => {
    window.scrollTo(0, document.body.scrollHeight);
    setPostId(val);
    axios
      .get(`https://dummyjson.com/posts/${val}/comments`)
      .then((res) => {
        setComments(res?.data?.comments);
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="App">
      <h2>Posts</h2>
      <Table
        dataSource={posts}
        columnInfo={columnInfo}
        dataColumnInfo={["id", "title", "body", "userId"]}
        editButton={true}
        setPostId={getCommentsById}
      />
      {postId && <h2>Comments</h2>}
      {postId && (
        <Table
          dataSource={comments}
          columnInfo={commentsColumnInfo}
          dataColumnInfo={["id", "body"]}
          editButton={false}
        />
      )}
    </div>
  );
}
