// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  let res = await fetch("https://dummy.restapiexample.com/api/v1/employees");
  res = await res.json();
  console.log("here,", res);
  //   const posts = await res.json();

  //   // By returning { props: { posts } }, the Blog component
  //   // will receive `posts` as a prop at build time
  //   return {
  //     props: {
  //       posts,
  //     },
  //   };
  const posts = [{ id: 1, title: "Internet" }];
  return {
    props: { posts },
  };
}

// TODO: Need to fetch `posts` (by calling some API endpoint)
//       before this page can be pre-rendered.
function Blog({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default Blog;
