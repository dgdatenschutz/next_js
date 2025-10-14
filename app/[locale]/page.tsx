import styles from "./page.module.scss";
import Landing from "./Landing/page";

export default function Home() {
  return (
    <div className={styles.main}>
      <Landing />
    </div>
  );
}
