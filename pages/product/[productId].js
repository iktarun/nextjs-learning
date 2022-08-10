import { useRouter } from "next/router";

function ProductDetails() {
  const router = useRouter();
  const productId = router.query.productId;
  return <div>ProductDetails Page product {productId}</div>;
}

export default ProductDetails;
