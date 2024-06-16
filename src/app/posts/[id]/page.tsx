"use client";

import { IPost } from "@/app/lib/types";
import { usePathname } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import Loading from "./loading";

import styles from "./post.module.sass";
import BackButton from "@/app/ui/back-button/back-button";

const Page = () => {
  const pathname = usePathname();
  const [post, setPost] = useState<IPost | null>(null);

  const id = pathname
    .split("/")
    .filter((id) => Number(id))
    .join();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  return (
    <Suspense fallback={<Loading />}>
      <article className={styles.post_page}>
        <div className={styles.post_page__addition}>
          <p className={styles.post_page__addition_id}>Пост: {post?.id}</p>
          <p className={styles.post_page__addition_user}>
            Пользователь: {post?.userId}
          </p>
        </div>
        <div className={styles.post_page__info}>
          <h2 className={styles.post_page__info_title}>{post?.title}</h2>
          <p className={styles.post_page__info_description}>{post?.body}</p>
        </div>
        <BackButton />
      </article>
    </Suspense>
  );
};

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default Page;
