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
          <h2>{main("companyInfo")}</h2>
          <div className={styles.company_info}>
            <p className={styles.company_name}>{main("companyName")}</p>
            <p>{main("addressLine1")}</p>
            <p>{main("addressLine2")}</p>
            <p>{main("addressLine3")}</p>
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
  );
}