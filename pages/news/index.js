function News({ articles }) {
  return (
    <>
      <h1>List of Articles</h1>
      {articles &&
        articles.map((article) => {
          return (
            <div key={article.id}>
              {article.id} | {article.title} | {article.category}
              <hr />
            </div>
          );
        })}
    </>
  );
}

export default News;

export async function getServerSideProps() {
  const respnse = await fetch("http://localhost:4000/news");
  const data = await respnse.json();

  return {
    props: {
      articles: data,
    },
  };
}
