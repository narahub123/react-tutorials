import Link from "next/link";
import { Fragment } from "react";

function NewsPage() {
  return (
    <Fragment>
      <h1>the News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-a-great-framework">
            NextJs Is A Great Framework
          </Link>
        </li>
        <li>Something Else</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
