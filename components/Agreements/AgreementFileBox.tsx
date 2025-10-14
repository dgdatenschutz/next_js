import React from "react";
import styles from "./AgreementFileBox.module.scss";
import { useEffect, useState } from "react";

interface AgreementFileBoxProps {
  text: string;
  fileUrl: string;
  delay: number;
  onClick?: () => void;
}

export default function AgreementFileBox({
  text,
  fileUrl,
  delay,
  onClick
}: AgreementFileBoxProps) {
  const handleFileOpen = () => {
    if (fileUrl) {
      window.open(fileUrl, "_blank");
    }
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${styles.agreement_file_box} ${isVisible ? styles.visible : ''}`} onClick={handleFileOpen}>
      <img
        src="/agreements/file-icon.svg"
        alt="file icon"
        className={styles.file_icon}
      />
      <p>{text}</p>
      <img
        src="/agreements/download-icon.svg"
        alt="download icon"
        className={styles.download_button}
      />
    </div>
  );
}
