import { comments } from "../../data/comments";

function Comment({ comment }) {
  return (
    <>
      <div>
        {comment.id} | {comment.title}
        <hr />
      </div>
    </>
  );
}

export default Comment;

export async function getStaticProps() {
  return {
    paths: [
      { params: { commentId: "1" } },
      { params: { commentId: "2" } },
      { params: { commentId: "3" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { commentId } = params;

  const comment = comments.find(
    (comment) => parseInt(commentId) === parseInt(comment.id)
  );

  // const response = await fetch(
  //   `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  // );

  // const data = await response.json();

  return {
    props: {
      comment,
    },
  };
}
