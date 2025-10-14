"use client";

import styles from "./priceDetails.module.scss";
import PriceBox from "../Landing/PriceBox/PriceBox";
import BaseButton from "../Base/Button/Button";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function PriceDetails() {
  const main = useTranslations("Landing");
  const buttons = useTranslations("Buttons");
  const router = useRouter();
  const pathname = usePathname();
  const handleContactPage = () => {
    const language = pathname.split('/')[1]; 
    router.push(`/${language}/pricing`);
  };

  return (
    <div>
      <div className={styles.price_section_boxes}>
        <PriceBox
          iso="ISO 9001"
          imageUrl="/landing-pictures/price-box1.svg"
          boxTitle={main("price.box-title")}
          price={[
            `€ 149 /  ${main("price.month")} `,
            `€ 1788 /  ${main("price.year")} `,
            `€ 5364 /  ${main("price.years")} `,
          ]}
          title={main("price.first-bottom.title")}
          description={main("price.first-bottom.description")}
        />
        <PriceBox
          iso="ISO 14001"
          imageUrl="/landing-pictures/price-box1.svg"
          boxTitle={main("price.box-title")}
          price={[
            `€ 149 /  ${main("price.month")} `,
            `€ 1788 /  ${main("price.year")} `,
            `€ 5364 /  ${main("price.years")} `,
          ]}
          title={main("price.second-bottom.title")}
          description={main("price.second-bottom.description")}
        />
        <PriceBox
          iso="ISO 27001"
          imageUrl="/landing-pictures/price-box1.svg"
          boxTitle={main("price.box-title")}
          price={[
            `€ 199 /  ${main("price.month")} `,
            `€ 2388 /  ${main("price.year")} `,
            `€ 7164 /  ${main("price.years")} `,
          ]}
          title={main("price.third-bottom.title")}
          description={main("price.third-bottom.description")}
        />
        <PriceBox
          iso="ISO 45001"
          boxTitle={main("price.box-title")}
          imageUrl="/landing-pictures/price-box4.svg"
          price={[
            `€ 199 /  ${main("price.month")} `,
            `€ 2388 /  ${main("price.year")} `,
            `€ 7164 /  ${main("price.years")} `,
          ]}
          title={main("price.fourth-bottom.title")}
          description={main("price.fourth-bottom.description")}
        />
      </div>
      <div className={styles.price_section_description}>
        <p>{main("price.description")}</p>
        <BaseButton
          text={buttons("book")}
          variant="defaultBlue"
          onClick={handleContactPage}
        />
      </div>
    </div>
  );
}
