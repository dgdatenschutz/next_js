import HeaderTitle from "@/components/HeaderTitle/HeaderTitle";
import styles from "./auditor.module.scss";
import Header from "@/components/Header/Header";
import Certification from "@/components/CertificationComponent/Certification";
import Form from "@/components/Form/Form";
import { useTranslations } from "next-intl";

export default function Auditor() {
  const main = useTranslations("Auditor");
  return (
    <div className={styles.auditor}>
      <div className={styles.auditor_header}>
        <Header />
        <div className={styles.auditor_header_section}>
          <HeaderTitle title={main("title")} subtitle={main("subtitle")} />
        </div>
      </div>
      <div className={styles.auditor_certification_block}>
        <Certification
          title={main("certification-title")}
          firstRowTexts={[`${main("certification-description")}`]}
          variant="pageThree"
        />
      </div>
      <div className={styles.auditor_form_block}>
        <Form variant="auditorForm" />
      </div>
    </div>
  );
}
