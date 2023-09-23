import { getSortedPostsData } from "../lib/posts";
import utilStyles from "../styles/utils.module.scss";
import Link from "next/link";
import Layout from "../components/Layout";

export default function Home({ allPostsData }) {
  return (
    <Layout home={true}>
      <Link href="/posts/first-post">First Post</Link>

      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {date}
              <br />
              <Link href={`/posts/${id}`}>read more....</Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
