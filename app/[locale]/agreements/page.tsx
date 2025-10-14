"use client";
import Certification from "@/components/CertificationComponent/Certification";
import styles from "./agreements.module.scss";
import AgreementFileBox from "@/components/Agreements/AgreementFileBox";
import { useTranslations } from "next-intl";

type PdfLinks = {
  certification_agreement: string;
  licensing_agreement: string;
  transfer_agreement: string;
};

const pdfLinks: Record<string, PdfLinks> = {
  en: {
    certification_agreement: "/pdf-files/agreement-files/certification_agreement.pdf",
    licensing_agreement: "/pdf-files/agreement-files/licensing_agreement.pdf",
    transfer_agreement: "/pdf-files/agreement-files/transfer_agreement.pdf",
  },
};

export default function Agreements() {
  const main = useTranslations("Agreements");
  const locale = 'en';
  const agreements = pdfLinks[locale];

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.headerSection}>
          <h3>{main("title")}</h3>
        </div>
      </div>

      <div className={styles.agreements_certification}>
        <Certification
          title={main("certification-title")}
          variant="pageFive"
        />
      </div>

      <div className={styles.agreements_content}>
        <div className={styles.agreements_content_boxes}>
          {agreements && Object.entries(agreements).map(([key, fileUrl], index) => (
            <AgreementFileBox
              key={key}
              text={main(key) || key}
              fileUrl={fileUrl}
              onClick={() => window.open(fileUrl, "_blank")}
              delay={index * 300}
            />
          ))}
          {!agreements && (
            <div className={styles.loader}>
              <img src="/loader.gif" alt="Loading..." />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
