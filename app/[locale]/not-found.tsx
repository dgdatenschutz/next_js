import BaseButton from "@/components/Base/Button/Button";
import Image from "next/image";
import Link from "next/link";

import styles from "./page.module.scss";

export default function NotFound() {
  return (
    <div className={styles.not_found}>
      <div className={styles.not_found_top}>
        <Image src="/404.png" alt="404" width={315} height={130} />
        <div>
          <h2>PAGE NOT FOUND!</h2>
          <p>Sorry, but the page you are trying to open does not exist ...</p>
        </div>
      </div>

      <Link href="/">
        <BaseButton text="Go to Home Page" variant="lightBlue" />
      </Link>
    </div>
  );
}
