import React, { useEffect, useState } from "react";
import profile_placeholder from "../assets/img/pp.jpg";
import BlogCard from "../components/BlogCard";

export default function Profile() {
  const user_token = localStorage.getItem("token");
  const userName = localStorage.getItem("user_name");
  const [image, setImage] = useState(profile_placeholder);
  var Buffer = require("buffer/").Buffer;
  const [posts, setPosts] = useState();
  useEffect(() => {
    const getUserData = async () => {
      try {
        // fetch user's profile picture
        const res = await fetch(
          `http://localhost:3001/api/user/photo/${userName}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${user_token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (res.status === 200) {
          const userData = res.json();
          userData.then((result) => {
            // Accessing the userPhoto property
            const userPhotoBuffer = result[0].userPhoto;
            const base64String = Buffer.from(userPhotoBuffer.data).toString(
              "base64"
            );

            const imageString = "data:image/jpeg;base64," + base64String;
            setImage(imageString);
          });
        }

        const blogData = await fetch(
          `http://localhost:3001/api/user/posts/${userName}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${user_token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (blogData.status === 200) {
          const blogRes = blogData.json();
          blogRes.then((result) => {
            if (result.length > 0) {
              setPosts(result);
            }
          });
        }
      } catch (error) {
        console.log("Error occured");
      }
    };
    getUserData();
  }, []);
  return (
    <>
      <div className="w-10/12 mx-auto">
        <div className="flex flex-row items-center">
          <img
            className="rounded-full h-36 w-36 mt-8"
            src={image}
            alt="default profile placeholder"
          ></img>
          {/* <h3 className="px-8"><span className="font-bold">Hello</span> {userName}</h3>
           */}
          <h1 className="px-8 font-bold">All Posts</h1>
        </div>

        {/* <hr className="h-px my-8 bg-blue-200 border-0 dark:bg-gray-700"></hr> */}
        <hr className="my-3 h-px px-8 bg-gray-400 "></hr>
        {posts ? (
          posts?.map((item) => {
            return <BlogCard key={item.id} {...item} />;
          })
        ) : (
          <h4>There are no posts to display...</h4>
        )}
      </div>
    </>
  );
}
