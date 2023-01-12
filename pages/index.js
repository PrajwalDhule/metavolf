import { Inter } from "@next/font/google";
import Link from "next/link";
import Login from "./login";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="index-body body">
      <nav>
        <ul>
          <li>
            <Link href="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
