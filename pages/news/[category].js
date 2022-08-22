import { serialize } from "cookie";

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
  const { params, req, res, query } = context;
  console.log(req.headers.cookie, query);
  //Setting cookies directly was giving some errors
  // res.setHeader('Set-Cookie', ['name'='Tarun']);
  res.setHeader("Set-Cookie", serialize("name", "Tarun"));
  const { category } = params;
  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );

  const data = await response.json();
  console.log(`Pre-Rendering New Articles for Category ${category}`);

  return {
    props: {
      articles: data,
      category,
    },
  };
}
