import Image from "next/image";
import styles from "./AreaBox.module.scss";
interface AreaBoxProps {
  imageUrl: string;
  title: string;
}
export default function AreaBox({ imageUrl, title }: AreaBoxProps) {
  return (
    <div className={styles.area_box}>
      <Image
        src={imageUrl}
        alt="area box"
        width={70}
        height={70}
        layout="responsive
      "
        className={styles.area_box_image}
      />
      <p>{title}</p>
    </div>
  );
}
