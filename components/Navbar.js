import Link from "next/link";
import "./Navbar.moduel.css";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/blog">
            <a class="active">Blog</a>
          </Link>
        </li>
        <li>
          <a href="#news">News</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
      </ul>
    </nav>
  );
}
