import Comment from "./Comment";
const CommentsList = ({ comments }) => {
  return comments.map((comment, i) => (
    <div key={i}>
      <Comment comment={comment} />
      <div className="ml-5 pl-2 border border-l-slate-800">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

export default CommentsList;
