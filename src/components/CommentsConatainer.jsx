import CommentsList from "./CommentsList";
import { commentsData } from "../utils/commentsData";

const CommentsConatainer = () => {
  return (
    <div>
      <h1 className="font-bold text-xl mb-2 mt-4">Comments</h1>
      <div>
        <CommentsList comments={commentsData} />
      </div>
    </div>
  );
};

export default CommentsConatainer;
