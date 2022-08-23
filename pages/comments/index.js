import React from "react";

function CommentPage() {
  const [comments, setComments] = React.useState([]);

  const fetchComments = async () => {
    const response = await fetch("http://localhost:3000/api/comments");
    const data = await response.json();
    setComments(data);
  };
  return (
    <>
      <button onClick={fetchComments}>Fetch Comment</button>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            {comment.id} {comment.text}
          </div>
        );
      })}
    </>
  );
}

export default CommentPage;
