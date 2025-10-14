import React from "react";
import styles from "./HeaderTitle.module.scss";

type TitleProps = {
  title: string;
  subtitle: string;
};

const HeaderTitle: React.FC<TitleProps> = ({ title, subtitle }) => {
  return (
    <div className={styles.main}>
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
    </div>
  );
};

export default HeaderTitle;
