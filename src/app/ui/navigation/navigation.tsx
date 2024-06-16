"use client";

import { ReactElement } from "react";
import styles from "./navigation.module.sass";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = (): ReactElement => {
  // Получаем url для выделения активной страницы
  const pathname = usePathname();

  return (
    <ul className={styles.navigation_links}>
      <li className={styles.navigation_links__link}>
        <Link href={"/"} className={pathname === "/" ? styles.active_link : ""}>
          Home
        </Link>
      </li>
      <li className={styles.navigation_links__link}>
        <Link
          href={"/posts"}
          className={pathname === "/posts" ? styles.active_link : ""}
        >
          Posts
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;
