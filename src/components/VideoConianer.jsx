import React, { useEffect, useState } from "react";
import { Youtube_API } from "../utils/constants.";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
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
        <Link key={item.id} to={"/watch?videoId=" + item.id}>
          <VideoCard item={item} />
        </Link>
      ))}
    </div>
  );
};

export default VideoConianer;
