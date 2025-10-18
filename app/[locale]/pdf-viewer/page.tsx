"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "@/i18n/routing";
import styles from "./pdf-viewer.module.scss";

export default function PdfViewer() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pdfUrl = searchParams.get("url");

  const handleClose = () => {
    router.back();
  };

  if (!pdfUrl) {
    return (
      <div className={styles.error_container}>
        <div className={styles.error_message}>
          <h1>No PDF specified</h1>
          <p>Please provide a PDF URL.</p>
          <button onClick={handleClose} className={styles.close_button}>
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.pdf_viewer_container}>
      <div className={styles.pdf_viewer_header}>
        <button onClick={handleClose} className={styles.close_button}>
          ← Back
        </button>
      </div>
      <div className={styles.pdf_viewer_content}>
        <iframe
          src={pdfUrl}
          className={styles.pdf_iframe}
          title="PDF Viewer"
        />
      </div>
    </div>
  );
}
