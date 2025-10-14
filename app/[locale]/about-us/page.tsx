"use client";

import styles from "./aboutUs.module.scss";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

type PdfLinks = {
  firstLink: string;
  secondLink: string;
  thirdLink: string;
};

const pdfLinks: Record<string, PdfLinks> = {
  en: {
    firstLink: "/pdf-files/en/audit-en.pdf",
    secondLink: "/pdf-files/en/complaints-en.pdf",
    thirdLink: "/pdf-files/en/use-of-logo-en.pdf",
  },
  hy: {
    firstLink: "/pdf-files/hy/audit-hy.pdf",
    secondLink: "/pdf-files/hy/complaints-hy.pdf",
    thirdLink: "/pdf-files/hy/use-of-logo-hy.pdf",
  },
  de: {
    firstLink: "/pdf-files/de/audit-de.pdf",
    secondLink: "/pdf-files/de/complaints-de.pdf",
    thirdLink: "/pdf-files/de/use-of-logo-de.pdf",
  },
};

export default function AboutUs() {
  const main = useTranslations("About");
  const pathname = usePathname();

  const getLanguage = (): keyof typeof pdfLinks => {
    const pathSegments = pathname.split("/");
    const language = pathSegments[1] as keyof typeof pdfLinks;
    return pdfLinks[language] ? language : "en";
  };

  const language = getLanguage();

  const { firstLink, secondLink, thirdLink } = pdfLinks[language];
  return (
    <>
      <div className={styles.about_us}>
        <div className={styles.about_us_header_section}>
          <h3 className={styles.about_us_header_section_text}>
            {main("title")}
          </h3>
        </div>
      </div>
      <div className={styles.certification_section}>
        <div className={styles.certification_section_content}>
          <img
            src="/certification-image.png"
            className={styles.certification_section_content_image}
            alt="Certification Image"
          />
          <div className={styles.certification_section_content_text_block}>
            <div
              className={styles.certification_section_content_text_block_text}
            >
              <h5>{main("first-text.title")}</h5>
              <p>{main("first-text.description")}</p>
            </div>
            <div
              className={styles.certification_section_content_text_block_text}
            >
              <h5>{main("second-text.title")}</h5>
              <p>{main("second-text.description")}</p>
            </div>
            <div
              className={styles.certification_section_content_text_block_text}
            >
              <h5>{main("third-text.title")}</h5>
              <p>{main("third-text.description")}</p>
              <p className={styles.links}>
                <a
                  href={firstLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.first_link}
                >
                  {main("additional.firstLink")}
                </a>{" "}
                {main("additional.firstText")}
                <a
                  href={secondLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.second_link}
                >
                  {main("additional.secondLink")}
                </a>{" "}
                {main("additional.secondText")}
              </p>
              <p>
                {main("additional.thirdText")}{" "}
                <a 
                href={thirdLink} 
                target="_blank" 
                rel="noopener noreferrer">
                  {main("additional.thirdLink")}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
