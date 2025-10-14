import HeaderTitle from "@/components/HeaderTitle/HeaderTitle";
import styles from "./pricing.module.scss";
import PriceDetails from "@/components/PriceDetails/PriceDetails";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Pricing() {
  const main = useTranslations("Pricing");
  const stepLines = [
    {
      id: "1.",
      description: `${main("steps.first-step")}`,
    },
    {
      id: "2.",
      description: `${main("steps.second-step")}`,
    },
    {
      id: "3.",
      description: `${main("steps.third-step")}`,
    },
    {
      id: "4.",
      description: `${main("steps.fourth-step")}`,
    },
  ];
  return (
    <>
      <div className={styles.main}>
        <div className={styles.headerSection}>
          <HeaderTitle title={main("title")} subtitle={main("subtitle")} />
        </div>
      </div>
      <div className={styles.pricing_header}>
        <div className={styles.pricing_header_title}>
          <h2>{main("mission.title")}</h2>
          <p>{main("mission.description")}</p>
        </div>

        <h3>{main("mission.second-title")}</h3>
      </div>

      <div>
        <PriceDetails />
      </div>

      <div className={styles.pricing_info}>
        <div className={styles.pricing_info_steps}>
          <p className={styles.pricing_info_steps_title}>
            {main("steps.title")}
          </p>
          <hr className={styles.pricing_info_steps_outline} />
        </div>

        <div className={styles.pricing_info_list}>
          {stepLines?.map((item, index) => (
            <div className={styles.pricing_info_list_line}>
              <h2 key={index}>{item.id}</h2>
              <p key={index}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.step_image}>
        <Image
          src="/pricing/pricing-steps.png"
          alt="steps"
          layout="responsive"
          width={1100}
          height={600}
        />
      </div>
    </>
  );
}
