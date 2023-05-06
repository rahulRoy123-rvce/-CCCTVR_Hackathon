import React from "react";
import data from "./data";

const TimelineItem = ({ data }) => (
  <div className="timeline-item">
    <div className="timeline-item-content text-white">
      <span className="tag " style={{ background: data.category.color }}>
        {data.category.tag}
      </span>
      <time>{data.date}</time>
      <p>{data.text}</p>
      {/* <p>{data.text}</p> */}
      <span className="circle"></span>
    </div>
  </div>
);

export default TimelineItem;
