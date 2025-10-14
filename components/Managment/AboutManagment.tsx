"use client";
import React, { useState, useRef } from "react";
import styles from "./aboutManagment.module.scss";
import BaseButton from "../Base/Button/Button";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

interface AboutManagementProps {
  content: string;
  buttonText: string;
  children?: React.ReactNode;
}

const AboutManagement: React.FC<AboutManagementProps> = ({
  content,
  buttonText,
  children,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef<HTMLParagraphElement>(null);

  const shouldTruncate = content.length > 300;
  const truncatedContent = content.slice(0, 300) + "...";

  const router = useRouter();
  const pathname = usePathname();

  const handleContactPage = () => {
    const language = pathname.split('/')[1]; 
    router.push(`/${language}/contact-us`);
  };

  return (
    <div className={styles.section}>
      <p className={styles.sectionText} ref={contentRef}>
        {isExpanded || !shouldTruncate ? content : truncatedContent}
        {shouldTruncate && !isExpanded && (
          <button
            onClick={() => setIsExpanded(true)}
            className={styles.moreButton}
          >
            More
            <Image
              src="/arrow-down.svg"
              width={10}
              height={10}
              alt="icon"
              className={styles.arrowIcon}
            />
          </button>
        )}
      </p>
      {isExpanded && (
        <>
          <div className={styles.additionalContent}>{children}</div>
          <button
            onClick={() => setIsExpanded(false)}
            className={styles.lessButton}
          >
            Less
            <Image
              src="/arrow-down.svg"
              width={10}
              height={10}
              alt="icon"
              className={styles.arrowLessIcon}
            />
          </button>
        </>
      )}
      <div className={styles.baseButton}>
        <BaseButton
          text={buttonText}
          variant="orange"
          onClick={handleContactPage}
        />
      </div>
    </div>
  );
};

export default AboutManagement;