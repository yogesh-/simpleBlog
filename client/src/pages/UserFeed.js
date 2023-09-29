import React, { useEffect } from "react";
import { useState } from "react";
import BlogCard from "../components/BlogCard";
const moment = require("moment");

export default function UserFeed() {
  const [data, setData] = useState();
  const user_token = localStorage.getItem("token");
  const fetchData = async () => {
    const res_data = await fetch("http://localhost:3001/api/get-blog", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${user_token}`,
        "Content-Type": "application/json",
      },
    });
    const final = await res_data.json();
    final?.forEach((item) => {
      item.date_posted = moment(item.date_posted).format("D MMMM YYYY");
    });
    setData(final);
    // console.log(final)
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex justify-center">
      <div className="md:w-7/12 bg-secondary h-screen flex flex-col items-center overflow-auto no-scrollbar">
        {data?.map((item) => {
          return <BlogCard key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
}
