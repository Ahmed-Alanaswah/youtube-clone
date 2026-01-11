import { img_profile } from "../utils/constants.";

const Comment = ({ comment }) => {
  return (
    <div className="flex p-2 bg-gray-300 rounded-lg shadow-sm mb-2">
      <img className="w-14 h-12" src={img_profile} alt="" />
      <div>
        <p>{comment.name}</p>
        <p>{comment.text}</p>
      </div>
    </div>
  );
};

export default Comment;
