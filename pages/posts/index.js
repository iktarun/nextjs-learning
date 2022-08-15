import Link from "next/link";

function PostList({ posts }) {
  return (
    <>
      <h1>Post List Page</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`posts/${post.id}`}>
              <a>
                {post.id} - {post.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default PostList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  const data = await response.json();

  return {
    props: {
      posts: data.slice(0, 3),
    },
  };
}
