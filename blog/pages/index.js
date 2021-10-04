import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { myLog } from "@/common/utils";

export default function Blog() {
  useEffect(() => {
    myLog("Blog rendered");
  }, []);

  return (
    <div>
      <h3>This is our blog</h3>
      <ul>
        <li>
          <Link href="/post/1">
            <a>Post 1</a>
          </Link>
        </li>
        <li>
          <Link href="/post/2">
            <a>Post 2</a>
          </Link>
        </li>
      </ul>
      <a href="/">Home</a>
      <div>
        <Image
          src="/blog/static/nextjs.png"
          alt="Next.js logo"
          width={200}
          height={160}
        />
      </div>
    </div>
  );
}
