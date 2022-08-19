import { useRouter } from "next/router";

function Review() {
  const router = useRouter();
  const { productId, reviewId } = router.query;
  return (
    <div>
      ProductDetails Page product {productId} review {reviewId}
    </div>
  );
}

export default Review;
