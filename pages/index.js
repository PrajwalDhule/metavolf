import { Inter } from "@next/font/google";
import Link from "next/link";
import Home from "./home/home";

const inter = Inter({ subsets: ["latin"] });

export default function Index() {
  return (
    <div className="outer-body">
      <Home />
    </div>
  );
}
