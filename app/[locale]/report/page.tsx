import HeaderTitle from "@/components/HeaderTitle/HeaderTitle";
import styles from "./report.module.scss";
import Header from "@/components/Header/Header";
import Certification from "@/components/CertificationComponent/Certification";
import Form from "@/components/Form/Form";
import { useTranslations } from "next-intl";
export default function Report() {
  const main = useTranslations("Report");
  return (
    <div className={styles.report}>
      <div className={styles.report_header}>
        <Header />
        <div className={styles.report_header_section}>
          <HeaderTitle title={main("title")} subtitle="" />
        </div>
      </div>
      <div className={styles.report_certification_block}>
        <Certification
          title={main("certification-title")}
          firstRowTexts={[
            `${main("certification-description-top")}`,
            `${main("certification-description-bottom")} `,
          ]}
          variant="pageFour"
        />
      </div>
      <div className={styles.report_form_block}>
        <Form variant="appealForm" />
      </div>
    </div>
  );
}
