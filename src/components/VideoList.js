import React from "react";
import VideoListItem from "./VideoListItem";

const VideoList = props => {
  const videoItems = props.videos.map((video, k) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={k}
        video={video}
      />
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
