import HeaderTitle from "@/components/HeaderTitle/HeaderTitle";
import styles from "./privacy-policy.module.scss";
import { useTranslations } from "next-intl";

export default function PrivacyPolicy() {
  const main = useTranslations("PrivacyPolicy");

  return (
    <div className={styles.privacy_policy}>
      <div className={styles.privacy_policy_header}>
        <div className={styles.privacy_policy_header_section}>
          <HeaderTitle title={main("title")} subtitle={main("subtitle")} />
        </div>
      </div>
      <div className={styles.privacy_policy_content}>
        <div className={styles.privacy_policy_content_details}>
          {/* Left side - Main content */}
          <div className={styles.privacy_policy_info}>
            <h2>{main("dataProtection")}</h2>

            <div className={styles.section_info}>
              <p><strong>{main("introductionTitle")}</strong></p>
              <p>{main("introductionText")}</p>
            </div>

            <div className={styles.section_info}>
              <p><strong>{main("dataCollectionTitle")}</strong></p>
              <p>{main("dataCollectionText")}</p>
            </div>

            <div className={styles.section_info}>
              <p><strong>{main("cookiesTitle")}</strong></p>
              <p>{main("cookiesText")}</p>
            </div>

            <div className={styles.section_info}>
              <p><strong>{main("rightsTitle")}</strong></p>
              <p>{main("rightsText")}</p>
            </div>
          </div>

          {/* Right side - Blue gradient panel with contact info */}
          <div className={styles.privacy_policy_side_panel}>
            <div className={styles.contact_section}>
              <p className={styles.section_title}>{main("contactTitle")}</p>
              <p>{main("companyName")}</p>
              <p>{main("addressLine1")}</p>
              <p>{main("addressLine2")}</p>
              {main("addressLine3") && <p>{main("addressLine3")}</p>}
              <p>{main("country")}</p>
            </div>

            <div className={styles.contact_details}>
              <p><strong>{main("contact")}</strong></p>
              <p>{main("phone")}</p>
              <p>{main("email")}</p>
            </div>

            <div className={styles.officer_info}>
              <p><strong>{main("dataProtectionOfficer")}</strong></p>
              <p>{main("officerName")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
