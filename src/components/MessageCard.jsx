import { img_profile } from "../utils/constants.";

const MessageCard = ({ name, text }) => {
  return (
    <div className="flex gap-2 items-center shadow-lg p-2 bg-gray-300 mb-2 w-full overflow-X-auto no-scrollbar">
      <img src={img_profile} alt="profile" className="w-12 h-8" />
      <p className="font-bold">{name}</p>
      <p>{text}</p>
    </div>
  );
};

export default MessageCard;
