import { IPost } from "@/app/lib/types";
import styles from "./post.module.sass";
import Link from "next/link";

const Post = ({ post }: { post: IPost }) => {
  return (
    <article className={styles.post}>
      <span className={styles.post__title}>
        <h3 className={styles.post__title_text}>{post.title}</h3>
        <p className={styles.post__title_post_id}>Пост id: {post.id}</p>
      </span>
      <div className={styles.post__description}>
        <p className={styles.post__description_text}>{post.body}</p>
        <Link className={styles.post__description_link} href={`/posts/${post.id}`}>Посмотреть</Link>
      </div>
    </article>
  );
};

export default Post;
