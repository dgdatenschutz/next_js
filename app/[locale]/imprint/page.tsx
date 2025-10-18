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
            <div className={styles.section_block}>
              <h3 className={styles.section_title}>{main("contact")}</h3>
              <p><strong className={styles.company_name_bold}>{main("companyName")}</strong></p>
              <p>{main("phone")}</p>
              <p>{main("email")}</p>
            </div>

            <div className={styles.section_block}>
              <h3 className={styles.section_title}>{main("nonDiscrimination")}</h3>
              <p>{main("nonDiscriminationText")}</p>
            </div>

            <div className={styles.section_block}>
              <h3 className={styles.section_title}>{main("copyright")}</h3>
              <p>{main("copyrightText")}</p>
            </div>

            <div className={styles.section_block}>
              <h3 className={styles.section_title}>{main("exclusionOfLiability")}</h3>
              <p>{main("exclusionOfLiabilityText")}</p>
            </div>

            <div className={styles.section_block}>
              <h3 className={styles.section_title}>{main("liabilityForLinks")}</h3>
              <p>{main("liabilityForLinksText")}</p>
            </div>

            <div className={styles.section_block}>
              <h3 className={styles.section_title}>{main("antiSpamRules")}</h3>
              <p>{main("antiSpamRulesText")}</p>
            </div>

            <div className={styles.section_block}>
              <h3 className={styles.section_title}>{main("responsiblePerson")}</h3>
              <p>{main("responsiblePersonName")}</p>
            </div>

            <div className={styles.section_block}>
              <h3 className={styles.section_title}>{main("supervisoryAuthority")}</h3>
              <p>{main("supervisoryName")}</p>
            </div>

            <div className={styles.copyright_footer}>
              <p>{main("copyrightFooter")}</p>
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