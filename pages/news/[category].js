function ArticleListByCategory({ articles, category }) {
  return (
    <>
      <h1>Showing new for category {category}</h1>
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

export default ArticleListByCategory;

export async function getServerSideProps(context) {
  const { params } = context;
  const { category } = params;
  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );

  const data = await response.json();

  return {
    props: {
      articles: data,
      category,
    },
  };
}
