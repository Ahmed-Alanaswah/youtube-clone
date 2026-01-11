import { useEffect } from "react";
import MessageCard from "./MessageCard";
import { useDispatch, useSelector } from "react-redux";
import { handleAddChat } from "../store/chatSlice";

const MessageCardList = () => {
  const dispatch = useDispatch();
  const chatList = useSelector((store) => store.chat.chatList);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        handleAddChat({
          name: "ahmad",
          text: "lRelume Ipsum is an innovative AI tool..",
        })
      );
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="border border-gray-700 bg-gray-400 w-full rounded-lg shadow-lg p-2 overflow-y-scroll h-[430px] flex flex-col-reverse">
      {chatList?.map((chat, index) => (
        <MessageCard
          key={index}
          index={index}
          name={chat.name}
          text={chat.text}
        />
      ))}
    </div>
  );
};

export default MessageCardList;
