import React from "react";

const VideoCard = ({ item }) => {
  const { snippet, statistics } = item;

  return (
    snippet.thumbnails.medium.url && (
      <div className="rounded-lg shadow-lg">
        <img
          className="rounded-lg"
          src={snippet.thumbnails.medium.url}
          alt=""
        />
        <div className="p-2">
          <h1 className="font-bold  text-ellipsis overflow-hidden truncate">
            {snippet.title}
          </h1>
          <p className="text-wrap">{statistics.likeCount} likes</p>
          <p>{statistics.viewCount} views</p>
          <p>{statistics.commentCount} comments</p>
        </div>
      </div>
    )
  );
};

export default VideoCard;
