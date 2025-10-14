import React from "react";
import styles from "./ImprintTextBlock.module.scss";

interface ImprintTextBlockProps {
  title: string;
  text: string;
}

const ImprintTextBlock: React.FC<ImprintTextBlockProps> = ({ title, text }) => {
  return (
    <div className={styles.imprint}>
      <h4 className={styles.imprint_title}>{title}</h4>
      <p className={styles.imprint_text}>{text}</p>
    </div>
  );
};

export default ImprintTextBlock;
