import React, { ReactNode } from "react";
import styles from "./certification.module.scss";

interface CertificationProps {
  title: string;
  firstRowTexts?: string[];
  secondText?: string;
  children?: ReactNode;
  variant?:
    | "default"
    | "pageOne"
    | "pageTwo"
    | "pageThree"
    | "pageFour"
    | "pageFive";
}

const Certification: React.FC<CertificationProps> = ({
  title,
  firstRowTexts = [],
  secondText,
  children,
  variant = "default",
}) => {
  return (
    <section className={`${styles.certification} ${styles[variant]}`}>
      <div className={styles.certification_content}>
        <img
          src="/certification-image.png"
          alt="Certification Image"
          className={styles.certification_content_image}
        />
        <div className={styles.certification_content_text_block}>
          <div className={styles.certification_content_text_block_first_row}>
            <div className={styles.title_block}>
              <p className={styles.title_block_title}>{title}</p>
              <hr />
            </div>
            <div className={styles.first_row_text_container}>
              {firstRowTexts.map((text, index) => (
                <p key={index} className={styles.first_row_text_container_text}>
                  {text}
                </p>
              ))}
            </div>
          </div>
          <p className={styles.certification_content_second_text}>
            {secondText}
          </p>
        </div>
      </div>
      {children}
    </section>
  );
};

export default Certification;
