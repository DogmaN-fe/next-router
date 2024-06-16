import { IPost } from "../lib/types";
import styles from "./page.module.sass";
import Post from "../ui/post/post";

const Page = async () => {
    const posts = await getData()

  return (
    <section className={styles.section_of_posts}>
      {posts && posts.map((post: IPost) => <Post key={post.id} post={post} />)}
    </section>
  );
}

async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

export default Page;
