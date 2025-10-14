import styles from "./managment.module.scss";
import Image from "next/image";

type ManagmentProps = {
  title?: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export default function Managment({
  title,
  subtitle,
  imageSrc,
}: ManagmentProps) {
  return (
    <section className={styles.container}>
      <div className={styles.heading}>
        {title && <h4 className={styles.title}>{title}</h4>}
        {subtitle && <h5 className={styles.subtitle}>{subtitle}</h5>}
      </div>
      {imageSrc && (
        <div className={styles.imageWrapper}>
          <Image
            src={imageSrc}
            alt="image"
            layout="responsive"
            width={1107}
            height={410}
          />
        </div>
      )}
    </section>
  );
}
