import HeaderTitle from "@/components/HeaderTitle/HeaderTitle";
import styles from "./contact-us.module.scss";
import Form from "@/components/Form/Form";
import { useTranslations } from "next-intl";
export default function ContactUs() {
  const main = useTranslations("Contact");
  return (
    <div className={styles.contact_us}>
      <div className={styles.contact_us_header}>
        <div className={styles.contact_us_header_section}>
          <HeaderTitle title={main("title")} subtitle={main("subtitle")} />
        </div>
      </div>
      <div className={styles.contact_us_content}>
        <div className={styles.contact_us_content_form}>
          <Form variant="defaultForm" />
        </div>
      </div>
    </div>
  );
}
