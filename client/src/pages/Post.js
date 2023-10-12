import axios from "axios";

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import useUpdateLike from "../utils/useUpdateLike";
const moment = require("moment");

const Post = () => {
  let { id } = useParams();
  const [data, setData] = useState();
  const user_token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/post/${id}`, {
        headers: {
          Authorization: `Bearer ${user_token}`,
        },
      })
      .then((data) => setData(data.data[0]));
  }, [id]);

  const [like, updateLike] = useUpdateLike(data?.likes, data?.id);

  // the {like} on line 43 does not render initially. Once clicked it renders with updated value.
  // check in browser

  return (
    <>
      <div className="flex justify-center h-screen dark:bg-black">
        {data ? (
          <div className="w-9/12 flex flex-col items-center mb-5 mt-5">
            <h1 className="font-bold underline underline-offset-4 mb-2 mt-2 dark:text-background">
              {data.title}
            </h1>

            <p className="text-center p-4 dark:text-background">
              {data.post_text}
            </p>
            <div className="flex space-x-2 mb-2">
              <div className="flex items-center justify-center cursor-pointer dark:text-background">
                <span onClick={() => updateLike(data)}>
                  <FaRegThumbsUp />
                </span>
                <p>&nbsp;{data.likes}</p>
              </div>
              <h4 className="italic dark:text-background">
                Posted by {data.user_name} on{" "}
                {moment(data.date_posted).format("D MMMM YYYY")}
              </h4>
            </div>
          </div>
        ) : (
          "...Loading"
        )}
      </div>
    </>
  );
};

export default Post;
