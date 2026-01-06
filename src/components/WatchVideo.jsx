import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSideBarHandler } from "../store/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchVideo = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const videoId = searchParams.get("videoId");
  useEffect(() => {
    dispatch(closeSideBarHandler());
  }, [dispatch]);
  return (
    <div className="w-3/4 mx-5 py-5 px-5">
      <iframe
        width="900"
        height="500"
        className="rounded-xl"
        src={`https://www.youtube.com/embed/${videoId}?si=tCe9gjKlM6YaiTvp"`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchVideo;
