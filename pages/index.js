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
      <div className="content">
        <h1>Welcome to Next.js!</h1>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <br />
        <Link href="/product">
          <a>Product</a>
        </Link>
        <br />
        <Link href="/posts">
          <a>Posts</a>
        </Link>
        <br />
        <button onClick={handleClick} className="btn btn-primary">
          Place Order
        </button>
      </div>
    </div>
  );
}

export default HomePage;
