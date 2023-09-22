import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Get_in_touch from "../components/get_in_touch";

export default function Home() {
  // const posts = data.posts;
  // console.log(posts);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Get_in_touch />

      {/* <Link href="posts/first-post">Post Page</Link> */}
    </Layout>
  );
}
