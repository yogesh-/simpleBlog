import React, { useState } from "react";
import Axios from "axios";

export default function CreatePost() {
  const [userName, setUserName] = useState("");
  const [title, setTitle] = useState("");
  const [blog, setBlog] = useState("");
  const user_token = localStorage.getItem("token");
  const submitPost = (e) => {
    e.preventDefault();
    Axios.post(
      "http://localhost:3001/api/create",
      { user: userName, blogTitle: title, blogPost: blog },
      {
        headers: {
          Authorization: `Bearer ${user_token}`,
        },
      }
    ).then(setBlog(""), setTitle(""), setUserName(""));
  };

  return (
    <div className="  w-screen h-screen flex justify-center items-center dark:bg-black">
      <div className="w-7/12 border py-4 border-black dark:border-background rounded flex flex-col items-center justify-center space-y-5">
        <p className="dark:text-background">Write your post</p>
        <input
          className="border border-black rounded"
          type="text"
          placeholder="Enter your username"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <input
          className="border border-black rounded"
          type="text"
          placeholder="Title"
          style={{ width: "390px" }}
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <textarea
          className="border border-sky-500 rounded"
          type="textarea"
          rows="8"
          cols="50"
          placeholder="Start writing here..."
          value={blog}
          onChange={(e) => {
            setBlog(e.target.value);
          }}
        />
        <button
          className="border border-green-300 bg-white p-1 rounded hover:bg-blue-300 dark:bg-background"
          onClick={(e) => submitPost(e)}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

<a href="https://icons8.com/illustrations/author/kP9rc8JiBCcz"></a>;
