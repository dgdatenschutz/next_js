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
    policy_of_impartiality
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
            <div
              className={styles.footer_items_links_lines_item}
              // onClick={() =>
              //   handleFileOpen(findDocumentByType("certification_mark"), certification_mark)
              // }
            >
              <a
                href={certification_mark}
                target="_blank"
                rel="noopener noreferrer"
              >
                {main("footerLinks.certification-policy")}
              </a>
            </div>
            <div
              className={styles.footer_items_links_lines_item}
              // onClick={() =>
              //   handleFileOpen(findDocumentByType("privacy"), privacy)
              // }
            >
              <a href={privacy} target="_blank" rel="noopener noreferrer">
                {main("footerLinks.privacy-policy")}
              </a>
            </div>
            <div
              className={styles.footer_items_links_lines_item}
              // onClick={() =>
              //   handleFileOpen(findDocumentByType("impartiality"), impartiality)
              // }
            >
              <a href={policy_of_impartiality} target="_blank" rel="noopener noreferrer">
                {main("footerLinks.impartiality-policy")}
              </a>
            </div>
          </div>

          <div className={styles.footer_items_links_lines}>
            <div
              className={styles.footer_items_links_lines_item}
              // onClick={() =>
              //   handleFileOpen(
              //     language === "hy" ? code_of_conduct_hy : code_of_conduct,
              //     code_of_conduct
              //   )
              // }
            >
              <a
                href={code_of_conduct}
                target="_blank"
                rel="noopener noreferrer"
              >
                {main("footerLinks.code-of-conduct")}
              </a>
            </div>
            <div className={styles.footer_items_links_lines_item}>
              <Link href="/agreements">{main("footerLinks.agreements")}</Link>
            </div>
            <div className={styles.footer_items_links_lines_item}>
              <Link href="/imprint">{main("footerLinks.imprint")}</Link>
            </div>
          </div>

          <div className={styles.footer_items_links_lines}>
            <div
              className={styles.footer_items_links_lines_item}
              // onClick={() =>
              //   handleFileOpen(
              //     findDocumentByType("transparency_document"),
              //     transparency_document
              //   )
              // }
            >
              <a
                href={transparency_document}
                target="_blank"
                rel="noopener noreferrer"
              >
                {main("footerLinks.transparency")}
              </a>
            </div>
            <div className={styles.footer_items_links_lines_item}>
              <Link href="/report">{main("footerLinks.appeals")}</Link>
            </div>
            <div
              className={styles.footer_items_links_lines_item}
              // onClick={() =>
              //   handleFileOpen(
              //     findDocumentByType("whistleblowing_hotline"),
              //     whistleblowing_hotline
              //   )
              // }
            >
              <a
                href={whistleblowing_hotline}
                target="_blank"
                rel="noopener noreferrer"
              >
                {main("footerLinks.whistleblowing-hotline")}
              </a>
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
