import { useRouter } from "next/router";

function Product({ product }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading....</div>;
  }

  return (
    <div>
      {product.id} {product.title} {product.price}
      <hr />
      <p>{product.description}</p>
    </div>
  );
}

export default Product;

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `http://localhost:4000/products/${params.productId}`
  );

  const data = await response.json();

  return {
    props: {
      product: data,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { productId: "1" } }],
    fallback: true,
  };
}
