import Link from "next/link";

function ProductList({ products }) {
  return (
    <div>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <Link href={`/products/${product.id}`}>
                <a>
                  Product {product.id} {product.title}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProductList;

export async function getStaticProps() {
  const response = await fetch("http://localhost:4000/products");
  const data = await response.json();

  return {
    props: {
      products: data,
    },
  };
}
