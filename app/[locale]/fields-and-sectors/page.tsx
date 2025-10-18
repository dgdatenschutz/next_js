import HeaderTitle from "@/components/HeaderTitle/HeaderTitle";
import styles from "./fields-and-sectors.module.scss";
import Block from "@/components/Sectors-Block/Block";
import { useTranslations } from "next-intl";
export default function page() {
  const main = useTranslations("Sectors");
  return (
    <>
      <div className={styles.fields_and_sectors}>
        <div className={styles.fields_and_sectors_title}>
          <HeaderTitle title={main("title")} subtitle={main("subtitle")} />
        </div>
      </div>
      <Block
        variant="variantA"
        title={main("construction.title")}
        firstText={main("construction.first-text")}
        imgSrc="/fields-and-sectors-images/construction-image.png"
        imgAlt="construction image"
        secondText={main("construction.second-text")}
      />
      <Block
        variant="variantB"
        title={main("hotels.title")}
        firstText={main("hotels.first-text")}
        imgSrc="/fields-and-sectors-images/hotels-and-hospitality-image.png"
        imgAlt="hotels and hospitality image"
        secondText={main("hotels.second-text")}
      />
      <Block
        variant="variantA"
        title={main("health.title")}
        firstText={main("health.first-text")}
        imgSrc="/fields-and-sectors-images/health-image.png"
        imgAlt="health image"
        secondText={main("health.second-text")}
      />
      <Block
        variant="variantB"
        title={main("technology.title")}
        firstText={main("technology.first-text")}
        imgSrc="/fields-and-sectors-images/technology-image.png"
        imgAlt="technology image"
        secondText={main("technology.second-text")}
      />
      <Block
        variant="variantA"
        title={main("manufacturing.title")}
        firstText={main("manufacturing.first-text")}
        imgSrc="/fields-and-sectors-images/manufacturing-image.png"
        imgAlt="manufacturing image"
        secondText={main("manufacturing.second-text")}
      />
      <Block
        variant="variantB"
        title={main("engineering.title")}
        firstText={main("engineering.first-text")}
        imgSrc="/fields-and-sectors-images/engineering-image.png"
        imgAlt="engineering image"
        secondText={main("engineering.second-text")}
      />
      <Block
        variant="variantA"
        title={main("services.title")}
        firstText={main("services.first-text")}
        imgSrc="/fields-and-sectors-images/community-services-image.png"
        imgAlt="community-services"
        secondText={main("services.second-text")}
      />
    </>
  );
}
