import React from "react";

function CommentPage() {
  const [comments, setComments] = React.useState([]);
  const [comment, setComment] = React.useState("");

  const fetchComments = async () => {
    const response = await fetch("http://localhost:3000/api/comments");
    const data = await response.json();
    setComments(data);
  };
  const submitComment = async () => {
    const response = await fetch("http://localhost:3000/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    setComments(data);
  };

  const deleteComment = async (commentId) => {
    const response = await fetch(
      `http://localhost:3000/api/comments/${commentId}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    console.log(data);
    fetchComments();
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
        <button onClick={submitComment}>Submit Comment</button>
      </div>
      <hr />
      <button onClick={fetchComments}>Fetch Comment</button>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            {comment.id} {comment.text}
            <button
              onClick={() => {
                deleteComment(comment.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
}

export default CommentPage;
