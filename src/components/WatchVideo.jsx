import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeSideBarHandler } from "../store/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsConatainer from "./CommentsConatainer";
import MessageCardList from "./MessageCardList";
import { handleAddChat } from "../store/chatSlice";
const WatchVideo = () => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const handleSendMessage = () => {
    dispatch(
      handleAddChat({
        name: "test",
        text: message,
      })
    );

    setMessage("");
  };

  const videoId = searchParams.get("videoId");
  useEffect(() => {
    dispatch(closeSideBarHandler());
  }, [dispatch]);
  return (
    <div className="mx-5 py-5 px-5 w-full">
      <div className="flex gap-5">
        <div className="">
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
        <div>
          <MessageCardList />
          <form
            onSubmit={(e) => e.preventDefault()}
            className="border border-gray-900 p-2 flex gap-2 rounded-lg bg-gray-400 mt-2"
          >
            <input
              className="border border-gray-600 px-5 py-2 w-full rounded-lg"
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              onClick={handleSendMessage}
              className="border border-gray-600 px-5 py-2 rounded-lg  bg-gra-100"
            >
              send
            </button>
          </form>
        </div>
      </div>
      <CommentsConatainer />
    </div>
  );
};

export default WatchVideo;
