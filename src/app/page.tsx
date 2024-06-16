import styles from "./page.module.sass";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.information}>
      <h1 className={styles.information__title}>
        Сайт предназанчен для отработки роутинга в NextJS
      </h1>
      <p className={styles.information__description}>
        Используется фейк апи Placeholder для отработки запросов RestAPI
      </p>
      <Link
        className={styles.information__link}
        href={"https://jsonplaceholder.typicode.com/"}
        target="_blanck"
      >
        Ссылка
      </Link>
    </div>
  );
}
