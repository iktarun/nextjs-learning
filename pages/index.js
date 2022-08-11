import Link from "next/link";
import { useRouter } from "next/router";

function HomePage() {
  const router = useRouter();
  const handleClick = () => {
    console.log("Placing Your Order");
    router.push("/product");
  };

  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <Link href="/blog">
        <a>Blog</a>
      </Link>{" "}
      <Link href="/product">
        <a>Product</a>
      </Link>
      <button onClick={handleClick}>Place Order</button>
    </div>
  );
}

export default HomePage;
