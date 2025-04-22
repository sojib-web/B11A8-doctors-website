// @ts-nocheck
import React from "react";
import SingleBlog from "./SingleBlog";
import { useLoaderData } from "react-router-dom";

const Blog = () => {
  const blog = useLoaderData();
  const singleBlog = blog.questions;
  console.log(singleBlog);
  return (
    <div>
      <h1 className="font-bold text-4xl text-center mt-5">Blog</h1>
      {singleBlog.map((blog) => (
        <SingleBlog key={blog.id} data={blog} />
      ))}
    </div>
  );
};

export default Blog;
