"use client";

import React from "react";
import HeaderTitle from "../../../components/HeaderTitle/HeaderTitle";
import styles from "./landing.module.scss";
import LandingBox from "../../../components/LandingBox/LandingBox";
import BaseButton from "@/components/Base/Button/Button";
import Certification from "@/components/CertificationComponent/Certification";
import AreaBox from "@/components/Landing/AreaBox/AreaBox";
import PriceDetails from "@/components/PriceDetails/PriceDetails";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export default function Landing() {
  const router = useRouter();
  const pathname = usePathname();
  const main = useTranslations("Landing");
  const buttons = useTranslations("Buttons");

  const handleAuditorPage = () => {
    router.push(`${pathname}/auditor`);
  };

  const handleContactPage = () => {
    router.push(`${pathname}/contact-us`);
  };

  const handleMore = () => {
    router.push(`${pathname}/fields-and-sectors`);
  };

  const boxesData = [
    { code: "ISO 9001", description: main("boxes.9001"), imageUrl: "./landing-pictures/landing-box1Icon.svg" },
    { code: "ISO 14001", description: main("boxes.14001"), imageUrl: "./landing-pictures/landing-box2Icon.svg" },
    { code: "ISO 27001", description: main("boxes.27001"), imageUrl: "./landing-pictures/landing-box3Icon.svg" },
    { code: "ISO 45001", description: main("boxes.45001"), imageUrl: "./landing-pictures/landing-box4Icon.svg" },
    { code: "ISO 27701", description: main("boxes.27701"), imageUrl: "./landing-pictures/landing-box3Icon.svg" },
    { code: "ISO 42001", description: main("boxes.42001"), imageUrl: "./landing-pictures/landing-box2Icon.svg" },
  ];

  const areaBoxesData = [
    { url: "/landing-pictures/technology.svg", title: main("fields.box1-description") },
    { url: "/landing-pictures/manufacturing.svg", title: main("fields.box2-description") },
    { url: "/landing-pictures/engineering.svg", title: main("fields.box3-description") },
    { url: "/landing-pictures/construction.svg", title: main("fields.box4-description") },
    { url: "/landing-pictures/services.svg", title: main("fields.box5-description") },
    { url: "/landing-pictures/health.svg", title: main("fields.box6-description") },
    { url: "/landing-pictures/hotels.svg", title: main("fields.box7-description") },
  ];

  return (
    <>
      <div className={styles.main}>
        <div className={styles.headerSection}>
          <HeaderTitle title={main("title")} subtitle={main("subtitle")} />
          <div className={styles.buttons}>
            <BaseButton text={buttons("book")} variant="defaultBlue" onClick={handleContactPage} />
            <BaseButton text={buttons("auditor")} variant="white" onClick={handleAuditorPage} />
          </div>
        </div>
        <div className={styles.container}>
          {boxesData.map((box, index) => (
            <LandingBox
              key={index}
              blockCode={box.code}
              blockDescription={box.description}
              imageAlt="img"
              imageUrl={box.imageUrl}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
      <div className={styles.certification_container}>
        <div>
          <Certification
            title={main("certification.title")}
            firstRowTexts={[`${main("certification.description-top")}`]}
            secondText={main("certification.description-bottom")}
            variant="pageOne"
          >
            <div className={styles.container}>
              <div className={styles.container_title_block}>
                <p className={styles.container_title_block_title}>
                  {main("certification.offer.title")}
                </p>
                <hr />
              </div>
              <p className={styles.container_text}>
                {main("certification.offer.description")}
              </p>
            </div>
          </Certification>
        </div>
      </div>
      <div className={styles.price_section}>
        <h3>{main("price.title")}</h3>
        <PriceDetails />
      </div>

      <div className={styles.certification_details}>
        <div className={styles.certification_details_title}>
          <h2>{main("fields.title")}</h2>
          <p>{main("fields.description")}</p>
        </div>

        <div className={styles.certification_details_items}>
          {areaBoxesData.map((box, index) => (
            <AreaBox
              key={index}
              imageUrl={box.url}
              title={box.title}
            />
          ))}
        </div>
        <div>
          <BaseButton variant="transparent" text={buttons("more")} onClick={handleMore} />
        </div>
      </div>
    </>
  );
}
