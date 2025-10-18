"use client";

import React, { useState, useEffect } from "react";
import BaseButton from "../Base/Button/Button";
import styles from "./Footer.module.scss";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { useGetLegalDocumentsQuery } from "@/store/apiSlice";
import BaseModal from "../Base/Modal/Modal";
import { setCookie, getCookie } from "@/helpers/cookies";
import { usePathname } from "next/navigation";

type PdfLinks = {
  certification_mark: string;
  privacy: string;
  impartiality: string;
  code_of_conduct: string;
  imprint: string;
  transparency_document: string;
  whistleblowing_hotline: string;
  policy_of_impartiality: string;
  appeals_policy: string;
  complaints_policy: string;
  complaint_and_appeals_form: string;
};

const pdfLinks: Record<string, PdfLinks> = {
  en: {
    certification_mark:
      "/pdf-files/footer-pdf-files/certification-mark-policy.pdf",
    privacy: "/pdf-files/footer-pdf-files/privacy-policy.pdf",
    impartiality: "/pdf-files/footer-pdf-files/impartiality-policy.pdf",
    code_of_conduct: "/pdf-files/footer-pdf-files/code-of-conduct.pdf",
    imprint: "/pdf-files/footer-pdf-files/imprint-footer.pdf",
    transparency_document:
      "/pdf-files/footer-pdf-files/transparency-document.pdf",
    whistleblowing_hotline:
      "/pdf-files/footer-pdf-files/whistleblowing-hotline.pdf",
    policy_of_impartiality: "/pdf-files/footer-pdf-files/policy-of-impartiality.pdf",
    appeals_policy: "/pdf-files/footer-pdf-files/appeals-policy-en.pdf",
    complaints_policy: "/pdf-files/footer-pdf-files/complaints-policy-en.pdf",
    complaint_and_appeals_form: "/pdf-files/footer-pdf-files/complaint-and-appeals-form-en.docx",
  },
  de: {
    certification_mark:
      "/pdf-files/footer-pdf-files/certification-mark-policy.pdf",
    privacy: "/pdf-files/footer-pdf-files/privacy-policy.pdf",
    impartiality: "/pdf-files/footer-pdf-files/impartiality-policy.pdf",
    code_of_conduct: "/pdf-files/footer-pdf-files/code-of-conduct.pdf",
    imprint: "/pdf-files/footer-pdf-files/imprint-footer.pdf",
    transparency_document:
      "/pdf-files/footer-pdf-files/transparency-document.pdf",
    whistleblowing_hotline:
      "/pdf-files/footer-pdf-files/whistleblowing-hotline.pdf",
    policy_of_impartiality: "/pdf-files/footer-pdf-files/policy-of-impartiality.pdf",
    appeals_policy: "/pdf-files/footer-pdf-files/appeals-policy-en.pdf",
    complaints_policy: "/pdf-files/footer-pdf-files/complaints-policy-en.pdf",
    complaint_and_appeals_form: "/pdf-files/footer-pdf-files/complaint-and-appeals-form-de.docx",
  },
  ka: {
    certification_mark:
      "/pdf-files/footer-pdf-files/certification-mark-policy.pdf",
    privacy: "/pdf-files/footer-pdf-files/privacy-policy.pdf",
    impartiality: "/pdf-files/footer-pdf-files/impartiality-policy.pdf",
    code_of_conduct: "/pdf-files/footer-pdf-files/code-of-conduct.pdf",
    imprint: "/pdf-files/footer-pdf-files/imprint-footer.pdf",
    transparency_document:
      "/pdf-files/footer-pdf-files/transparency-document.pdf",
    whistleblowing_hotline:
      "/pdf-files/footer-pdf-files/whistleblowing-hotline.pdf",
    policy_of_impartiality: "/pdf-files/footer-pdf-files/policy-of-impartiality.pdf",
    appeals_policy: "/pdf-files/footer-pdf-files/appeals-policy-ka.pdf",
    complaints_policy: "/pdf-files/footer-pdf-files/complaints-policy-ka.pdf",
    complaint_and_appeals_form: "/pdf-files/footer-pdf-files/complaint-and-appeals-form-ka.docx",
  },
};

export default function Footer() {
  const pathname = usePathname();
  const [modalOpen, setModalOpen] = useState(false);
  const main = useTranslations("Footer");
  const modal = useTranslations("Modals");
  const buttons = useTranslations("Buttons");
  const { data, error } = useGetLegalDocumentsQuery();

  useEffect(() => {
    const consent = getCookie("cookiesAccepted");
    if (!consent) {
      setModalOpen(true);
    }
  }, []);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const acceptCookies = () => {
    setCookie("cookiesAccepted", "true", 365);
    closeModal();
  };

  const findDocumentByType = (type: string) => {
    return data?.find((doc: any) => doc.type === type && doc.language === "en")
      ?.file;
  };

  const handleFileOpen = (
    fileUrl: string | undefined,
    fallbackUrl: string | undefined
  ) => {
    const baseUrl = "https://gcbadmin.cert-authority.com/storage/";

    if (fileUrl) {
      window.open(`${baseUrl}${fileUrl}`, "_blank");
    } else if (fallbackUrl) {
      window.open(`${baseUrl}${fallbackUrl}`, "_blank");
    }
  };

  const getLanguage = (): keyof typeof pdfLinks => {
    const pathSegments = pathname.split("/");
    const language = pathSegments[1] as keyof typeof pdfLinks;
    return pdfLinks[language] ? language : "en";
  };

  const language = getLanguage();
  const {
    certification_mark,
    privacy,
    impartiality,
    code_of_conduct,
    imprint,
    whistleblowing_hotline,
    transparency_document,
    policy_of_impartiality,
    complaint_and_appeals_form
  } = pdfLinks[language];

  return (
    <div className={styles.footer}>
      <div className={styles.footer_items}>
        <div className={styles.footer_items_start}>
          <BaseButton
            text={buttons("manage-consent")}
            variant="orange"
            onClick={openModal}
          />
        </div>

        <div className={styles.footer_items_links}>
          <div className={styles.footer_items_links_lines}>
            <div className={styles.footer_items_links_lines_item}>
              <Link href={`/pdf-viewer?url=${encodeURIComponent(certification_mark)}`}>
                {main("footerLinks.certification-policy")}
              </Link>
            </div>
            <div className={styles.footer_items_links_lines_item}>
              <Link href="/privacy-policy">{main("footerLinks.privacy-policy")}</Link>
            </div>
            <div className={styles.footer_items_links_lines_item}>
              <Link href={`/pdf-viewer?url=${encodeURIComponent(policy_of_impartiality)}`}>
                {main("footerLinks.impartiality-policy")}
              </Link>
            </div>
          </div>

          <div className={styles.footer_items_links_lines}>
            <div className={styles.footer_items_links_lines_item}>
              <Link href={`/pdf-viewer?url=${encodeURIComponent(code_of_conduct)}`}>
                {main("footerLinks.code-of-conduct")}
              </Link>
            </div>
            <div className={styles.footer_items_links_lines_item}>
              <Link href="/agreements">{main("footerLinks.agreements")}</Link>
            </div>
            <div className={styles.footer_items_links_lines_item}>
              <Link href="/imprint">{main("footerLinks.imprint")}</Link>
            </div>
          </div>

          <div className={styles.footer_items_links_lines}>
            <div className={styles.footer_items_links_lines_item}>
              <Link href={`/pdf-viewer?url=${encodeURIComponent(transparency_document)}`}>
                {main("footerLinks.transparency")}
              </Link>
            </div>
            <div className={styles.footer_items_links_lines_item}>
              <a
                href={complaint_and_appeals_form}
                download
              >
                {main("footerLinks.appeals")}
              </a>
            </div>
            <div className={styles.footer_items_links_lines_item}>
              <Link href={`/pdf-viewer?url=${encodeURIComponent(whistleblowing_hotline)}`}>
                {main("footerLinks.whistleblowing-hotline")}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <p className={styles.copyright_text}>{main("copyright")}</p>
      </div>
      {modalOpen && (
        <BaseModal
          title={modal("cookieModal.title")}
          message={modal("cookieModal.message")}
          onClose={closeModal}
          withTwoButtons={true}
          secondButtonText={buttons("accept-cookies")}
          onSecondButtonClick={acceptCookies}
          isCookieModal={true}
        />
      )}
    </div>
  );
}
