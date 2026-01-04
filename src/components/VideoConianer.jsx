import React, { useEffect, useState } from "react";
import { Youtube_API } from "../utils/constants.";
import VideoCard from "./VideoCard";
const VideoConianer = () => {
  const [videos, setVideos] = useState([]);
  const getVideos = async () => {
    const res = await fetch(Youtube_API);
    const json = await res.json();
    setVideos(json.items);
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 py-3">
      {videos?.map((item) => (
        <VideoCard item={item} />
      ))}
    </div>
  );
};

export default VideoConianer;
