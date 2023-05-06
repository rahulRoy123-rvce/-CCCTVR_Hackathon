import React from "react";
import timelineData from "./data";
import TimelineItem from "./Timeline";

const Timeline = () =>
  timelineData.length > 0 && (
    <div>
      <div className="timeline-container">
        {timelineData.map((data, idx) => (
          <TimelineItem data={data} key={idx} />
        ))}
      </div>
    </div>
  );

export default Timeline;
