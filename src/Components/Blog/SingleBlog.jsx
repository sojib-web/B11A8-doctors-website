import React from "react";

const SingleBlog = ({ data }) => {
  console.log(data);
  const { question, answer } = data;
  return (
    <div className="mt-10 mb-10">
      <div className="space-y-3 collapse bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title font-semibold">
          {question}
          <div className="divider m-2 p-0"></div>
        </div>
        <div className="collapse-content text-sm">
          <span>Answer:</span> {answer}
        </div>
        <div className="divider m-2 p-0"></div>
      </div>
    </div>
  );
};

export default SingleBlog;
