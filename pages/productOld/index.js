import Link from "next/link";

function ProductList() {
  return (
    <div>
      <h1>Product Page</h1>
      <Link href="/">
        <a>Home Page</a>
      </Link>
      <ul>
        <li>
          <Link href="/product/1">
            <a>Product 1</a>
          </Link>
        </li>
        <li>
          <Link href="/product/2">
            <a>Product 2</a>
          </Link>
        </li>
        <li>
          <Link href="/product/3">
            <a>Product 3</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default ProductList;
