import { useRouter } from "next/navigation";

import styles from "./back-button.module.sass";

const BackButton = () => {
  const router = useRouter();
  const goBack = () => router.back();
  return (
    <button className={styles.back_button} onClick={goBack}>
      Назад
    </button>
  );
};

export default BackButton;