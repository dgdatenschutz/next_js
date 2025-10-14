import Image from "next/image";
import styles from "./PriceBox.module.scss";

interface PriceBoxProps {
  imageUrl: string;
  iso: string;
  price?: string[];
  title?: string;
  description: string;
  boxTitle: string;
}
export default function PriceBox({
  imageUrl,
  iso,
  price,
  title,
  description,
  boxTitle,
}: PriceBoxProps) {
  return (
    <div className={styles.price_box}>
      <div className={styles.price_box_top}>
        <div className={styles.price_box_top_header}>
          <Image src={imageUrl} width={60} height={60} alt="price box icons" />
          <div>
            <h2>{iso}</h2>
            <h2>{boxTitle}</h2>
          </div>

          <span></span>

          <div className={styles.price_box_top_header_price}>
            {price?.map((price, index) => (
              <p key={index}>{price}</p>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.price_box_bottom}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
