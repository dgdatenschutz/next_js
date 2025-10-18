"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./modal.module.scss";
import BaseButton from "../Button/Button";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";

// Map locale codes to country names
const localeToCountryName: Record<string, string> = {
  "en": "Global",
  "de": "Deutschland",
  "ka": "საქართველო",
  "de-de": "Deutschland",
  "de-at": "Österreich",
  "de-ch": "Schweiz",
  "en-us": "United States",
  "en-gb": "United Kingdom",
  "en-ca": "Canada",
  "en-au": "Australia",
};

// Only show country-specific locales in the dropdown to avoid duplication
type CountryLocale = "en" | "ka" | "de-de" | "de-at" | "de-ch" | "en-us" | "en-gb" | "en-ca" | "en-au";
const countryLocales: CountryLocale[] = [
  "en",
  "ka",
  "de-de",
  "de-at", 
  "de-ch",
  "en-us",
  "en-gb",
  "en-ca",
  "en-au"
];

interface BaseModalProps {
  message: string;
  onClose: () => void;
  imageUrl?: string;
  title?: string;
  withTwoButtons?: boolean;
  secondButtonText?: string;
  onSecondButtonClick?: () => void;
  isCookieModal?: boolean;
}

export default function BaseModal({
  message,
  onClose,
  imageUrl,
  title,
  withTwoButtons,
  secondButtonText,
  onSecondButtonClick,
  isCookieModal = false,
}: BaseModalProps) {
  const modal = useTranslations("Modals");
  const button = useTranslations("Buttons");
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Debug logging
  useEffect(() => {
    console.log("=== COOKIE MODAL DEBUG ===");
    console.log("Modal isCookieModal:", isCookieModal);
    console.log("withTwoButtons:", withTwoButtons);
    console.log("Language selector should render:", isCookieModal);
    console.log("=========================");
  }, [isCookieModal, withTwoButtons]);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const switchLanguage = (locale: string) => {
    const pathSegments = pathname.split("/").filter(Boolean);
    if (pathSegments.length > 0 && pathSegments[0] !== locale) {
      pathSegments[0] = locale;
    } else if (pathSegments.length === 0) {
      pathSegments.unshift(locale);
    }
    return `/${pathSegments.join("/")}`;
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  return (
    <div className={styles.overlay}>
      <div
        className={`${styles.modal} ${withTwoButtons ? styles.twoButtons : ""} ${isCookieModal ? styles.cookieModal : ""}`}
      >
        {imageUrl && (
          <img src={imageUrl} alt="modal icon" className={styles.icon} />
        )}
        
        {/* Language Selector - Only shown for cookie modal */}
        {isCookieModal && (
          <div className={styles.language_selector} ref={dropdownRef}>
            <img
              src="/language-icon.svg"
              alt="language icon"
              onClick={toggleDropdown}
              className={styles.language_icon}
            />
            <img
              src={
                dropdownOpen
                  ? "/language-arrow-up.svg"
                  : "/language-arrow-down.svg"
              }
              alt="arrow"
              onClick={toggleDropdown}
              className={styles.language_arrow}
            />
            {dropdownOpen && (
              <div className={styles.language_dropdown}>
                {countryLocales.map((locale) => (
                  <Link
                    key={locale}
                    href={switchLanguage("")}
                    locale={locale}
                    className={styles.language_dropdown_item}
                  >
                    <p onClick={toggleDropdown}>{localeToCountryName[locale]}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
        
        {title && <h2 className={styles.title}>{title}</h2>}
        
        <p className={styles.message}>{message}</p>
        {withTwoButtons && (
          <>
            <div className={styles.checkbox_container}>
              <input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox">{modal("cookieModal.checkText")}</label>
            </div>
            <div className={styles.buttonContainer}>
              <div className={styles.buttons_block}>
                {secondButtonText && onSecondButtonClick && (
                  <BaseButton
                    text={secondButtonText}
                    variant="defaultBlue"
                    onClick={onSecondButtonClick}
                  />
                )}
                <BaseButton
                  text={button("decline")}
                  variant="lightBlue"
                  onClick={onClose}
                />
              </div>
            </div>
          </>
        )}
        {!withTwoButtons && (
          <div className={styles.buttonContainer}>
            <div className={styles.buttons_block}>
              <BaseButton
                text={button("close")}
                variant="lightBlue"
                onClick={onClose}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
