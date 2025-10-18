import HeaderTitle from "@/components/HeaderTitle/HeaderTitle";
import styles from "./auditor.module.scss";
import { useTranslations } from "next-intl";

export default function Auditor() {
  const main = useTranslations("Auditor");

  return (
    <div className={styles.auditor}>
      <div className={styles.auditor_header}>
        <div className={styles.auditor_header_section}>
          <HeaderTitle title={main("title")} subtitle={main("subtitle")} />
        </div>
      </div>
      <div className={styles.auditor_content}>
        <div className={styles.auditor_content_details}>
          {/* Left side - Main content with download info */}
          <div className={styles.auditor_info}>
            <div className={styles.auditor_text}>
              <h2>{main("greeting")}</h2>
              <p>{main("instruction")}</p>
              
              <div className={styles.download_link}>
                <a 
                  href="/pdf-files/application-form.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.download_button}
                >
                  {main("downloadLink")}
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Blue gradient panel with contact info */}
          <div className={styles.auditor_side_panel}>
            <div className={styles.company_section}>
              <p className={styles.company_name}>{main("companyName")}</p>
              <p>{main("addressLine1")}</p>
              <p>{main("addressLine2")}</p>
              {main("addressLine3") && <p>{main("addressLine3")}</p>}
              <p>{main("country")}</p>
            </div>

            <div className={styles.contact_details}>
              <div className={styles.contact_item}>
                <img src="/phone.svg" alt="Phone" className={styles.icon} />
                <p>{main("phone")}</p>
              </div>
              <div className={styles.contact_item}>
                <img src="/email.svg" alt="Email" className={styles.icon} />
                <p>{main("email")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
