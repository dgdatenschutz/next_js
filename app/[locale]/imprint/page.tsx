import HeaderTitle from "@/components/HeaderTitle/HeaderTitle";
import styles from "./imprint.module.scss";
import { useTranslations } from "next-intl";

export default function Imprint() {
  const main = useTranslations("Imprint");

  return (
    <div className={styles.imprint}>
      <div className={styles.imprint_header}>
        <div className={styles.imprint_header_section}>
          <HeaderTitle title={main("title")} subtitle={main("subtitle")} />
        </div>
      </div>
      <div className={styles.imprint_content}>
        <div className={styles.imprint_content_details}>
          {/* Left side - Main content */}
          <div className={styles.imprint_info}>
            <h2>{main("companyInfo")}</h2>

            <div className={styles.editorial_info}>
              <p><strong>{main("editorialResponsibility")}</strong></p>
              <p>{main("companyName")}</p>
              <p>{main("editorialPerson")}</p>
            </div>

            <div className={styles.supervisory_info}>
              <p><strong>{main("supervisoryAuthority")}</strong></p>
              <p>{main("supervisoryName")}</p>
              <p>{main("supervisoryAddress")}</p>
            </div>

            <div className={styles.disclaimer_info}>
              <p><strong>{main("disclaimer")}</strong></p>
              <p>{main("disclaimerText")}</p>
            </div>

            <div className={styles.copyright_info}>
              <p><strong>{main("copyright")}</strong></p>
              <p>{main("copyrightText")}</p>
            </div>
          </div>

          {/* Right side - Blue gradient panel with address, contact and management */}
          <div className={styles.imprint_side_panel}>
            <div className={styles.company_address}>
              <p className={styles.company_name}>{main("companyName")}</p>
              <p>{main("addressLine1")}</p>
              <p>{main("addressLine2")}</p>
              {main("addressLine3") && <p>{main("addressLine3")}</p>}
              <p>{main("country")}</p>
            </div>

            <div className={styles.contact_info}>
              <p><strong>{main("contact")}</strong></p>
              <p>{main("phone")}</p>
              <p>{main("email")}</p>
            </div>

            <div className={styles.management_info}>
              <p><strong>{main("management")}</strong></p>
              <p>{main("managingDirector")}</p>
              <p>{main("identificationCode")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}