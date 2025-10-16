import React from "react";
import AboutManagment from "../../../components/Managment/AboutManagment";
import Certification from "../../../components/CertificationComponent/Certification";
import styles from "./standards.module.scss";
import HeaderTitle from "@/components/HeaderTitle/HeaderTitle";
import Managment from "../../../components/Managment/Managment";
import { useTranslations } from "next-intl";
export default function Standards() {
  const main = useTranslations("Standards");
  return (
    <>
      <div className={styles.standards}>
        <div className={styles.standards_header_section}>
          <HeaderTitle title={main("title")} subtitle={main("subtitle")} />
        </div>
      </div>
      <Certification
        title={main("certification.title")}
        firstRowTexts={[`${main("certification.description-top")}`]}
        secondText={main("certification.description-bottom")}
        variant="pageTwo"
      />
      <div>
        <Managment
          title={main("management.27701-title")}
          subtitle={main("management.27701-description")}
          imageSrc="/managment-pictures/ISO27701-picture.svg"
        />
        <AboutManagment
          content={main("iso27701.top")}
          buttonText={main("management.27701-button")}
        >
          <p className={styles.text14001}>{main("iso27701.bottom")}</p>
        </AboutManagment>
        <Managment
          title={main("management.9001-title")}
          subtitle={main("management.9001-description")}
          imageSrc="/managment-pictures/ISO9001-picture.svg"
        />
        <AboutManagment
          content={main("iso9001.top")}
          buttonText={main("management.9001-button")}
        >
          <ul className={styles.unordered_list}>
            <li>{main("iso9001.first-li.item1")}</li>
            <li>{main("iso9001.first-li.item2")}</li>
            <li>{main("iso9001.first-li.item3")}</li>
            <li>{main("iso9001.first-li.item4")}</li>
          </ul>
          <div className={styles.list_block}>
            <h4 className={styles.list_block_title}>
              {main("iso9001.second-li.title")}
            </h4>
            <ul className={styles.unordered_list}>
              <li> {main("iso9001.second-li.item1")}</li>
              <li> {main("iso9001.second-li.item2")}</li>
            </ul>
          </div>
          <p className={styles.second_text}>{main("iso9001.bottom")}</p>
        </AboutManagment>
        <Managment
          title={main("management.14001-title")}
          subtitle={main("management.14001-description")}
          imageSrc="/managment-pictures/ISO14001-picture.svg"
        />
        <AboutManagment
          content={main("iso14001.top")}
          buttonText={main("management.14001-button")}
        >
          <p className={styles.text14001}>{main("iso14001.bottom")}</p>
        </AboutManagment>
        <Managment
          title={main("management.27001-title")}
          subtitle={main("management.27001-description")}
          imageSrc="/managment-pictures/ISO27001-picture.svg"
        />
        <AboutManagment
          content={main("iso27001.top")}
          buttonText={main("management.27001-button")}
        >
        </AboutManagment>
        <Managment
          title={main("management.45001-title")}
          subtitle={main("management.45001-description")}
          imageSrc="/managment-pictures/ISO45001-picture.svg"
        />
        <AboutManagment
          content={main("iso45001.top")}
          buttonText={main("management.45001-button")}
        >
          <div className={styles.list45001}>
            <h4 className={styles.listTitle}>
              {main("iso45001.first-li.title")}
            </h4>
            <ul className={styles.unordered_list}>
              <li>{main("iso45001.first-li.item1")}</li>
              <li>{main("iso45001.first-li.item2")}</li>
              <li>{main("iso45001.first-li.item3")}</li>
              <li>{main("iso45001.first-li.item4")}</li>
              <li>{main("iso45001.first-li.item5")}</li>
              <li>{main("iso45001.first-li.item6")}</li>
              <li>{main("iso45001.first-li.item7")}</li>
              <li>{main("iso45001.first-li.item8")}</li>
            </ul>
            <p className={styles.second_text}>{main("iso45001.bottom")}</p>
          </div>
        </AboutManagment>
        <Managment
          title={main("management.42001-title")}
          subtitle={main("management.42001-description")}
          imageSrc="/managment-pictures/ISO42001-picture.svg"
        />
        <AboutManagment
          content={main("iso42001.top")}
          buttonText={main("management.42001-button")}
        >
          <p className={styles.text14001}>{main("iso42001.bottom")}</p>
          <p className={styles.text14001}>{main("iso42001.bottom-second")}</p>
        </AboutManagment>
      </div>
    </>
  );
}
