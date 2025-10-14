import styles from "./block.module.scss";
import React from "react";

interface BlockProps {
  title: string;
  firstText: string;
  secondText: string;
  imgSrc: string;
  imgAlt: string;
  variant?: "variantA" | "variantB";
}

const Block: React.FC<BlockProps> = ({
  title,
  firstText,
  secondText,
  imgSrc,
  imgAlt,
  variant = "variantA",
}) => {
  return (
    <div className={`${styles.sector} ${styles[variant]}`}>
      <div className={styles.sector_block}>
        <div className={styles.sector_block_first_text_block}>
          <div className={styles.sector_block_first_text_block_title}>
            <p className={styles.sector_block_first_text_block_title_text}>{title}</p>
            <hr />
          </div>
          <p className={styles.sector_block_first_text_block_first_text}>{firstText}</p>
        </div>
        <img src={imgSrc} alt={imgAlt} className={styles.sector_block_image}/>
      </div>
      <p className={styles.sector_second_text}>{secondText}</p>
    </div>
  );
};

export default Block;
