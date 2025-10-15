"use client";
import { usePathname } from "next/navigation";
import { Link } from "@/i18n/routing";
import styles from "./Header.module.scss";
import { useEffect, useRef, useState } from "react";
import BaseButton from "../Base/Button/Button";
import { useTranslations } from "next-intl";

// Map locale codes to country names
const localeToCountryName: Record<string, string> = {
  "en": "Global",
  "de": "Deutschland",
  "de-de": "Deutschland",
  "de-at": "Österreich",
  "de-ch": "Schweiz",
  "en-us": "United States",
  "en-gb": "United Kingdom",
  "en-ca": "Canada",
  "en-au": "Australia",
};

// Only show country-specific locales in the dropdown to avoid duplication
type CountryLocale = "en" | "de-de" | "de-at" | "de-ch" | "en-us" | "en-gb" | "en-ca" | "en-au";
const countryLocales: CountryLocale[] = [
  "en",
  "de-de",
  "de-at", 
  "de-ch",
  "en-us",
  "en-gb",
  "en-ca",
  "en-au"
];

export default function Header() {
  const pathname = usePathname();
  const t = useTranslations("Header");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
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

  const isActivePath = (path: string) => {
    const pathSegments = pathname.split("/").filter(Boolean);
    const locale = ["en", "de", "de-de", "de-at", "de-ch", "en-us", "en-gb", "en-ca", "en-au"].includes(pathSegments[0])
      ? pathSegments[0]
      : "";
    if (path === "/" && (pathname === `/${locale}` || pathname === "/")) {
      return true;
    }
    return pathname === (locale ? `/${locale}${path}` : path);
  };
  
  const handleOutsideClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className={styles.header}>
      <Link href="/">
        <img src="/logo.svg" alt="logo" className={styles.header_logo} />
      </Link>

      <div className={styles.header_left}>
        <div className={styles.header_links}>
          <Link className={styles.header_links_item} href="/">
            <p className={`${isActivePath("/") ? styles.active : ""}`}>
              {t("navLinks.home")}
            </p>
          </Link>
          <Link className={styles.header_links_item} href="/standards">
            <p className={`${isActivePath("/standards") ? styles.active : ""}`}>
              {t("navLinks.standards")}
            </p>
          </Link>
          <Link
            className={styles.header_links_item_long}
            href="/fields-and-sectors"
          >
            <p
              className={`${
                isActivePath("/fields-and-sectors") ? styles.active : ""
              }`}
            >
              {t("navLinks.sectors")}
            </p>
          </Link>
          <Link className={styles.header_links_item} href="/pricing">
            <p className={`${isActivePath("/pricing") ? styles.active : ""}`}>
              {t("navLinks.pricing")}
            </p>
          </Link>
          <Link className={styles.header_links_item} href="/about-us">
            <p className={`${isActivePath("/about-us") ? styles.active : ""}`}>
              {t("navLinks.about")}
            </p>
          </Link>
          <Link className={styles.header_links_item} href="/imprint">
            <p
              className={`${isActivePath("/imprint") ? styles.active : ""}`}
            >
              {t("navLinks.contact")}
            </p>
          </Link>
        </div>

        <div className={styles.header_actions}>
          <div className={styles.header_actions_language} ref={dropdownRef}>
            <img
              src="/language-icon.svg"
              alt="language icon"
              onClick={toggleDropdown}
              className={styles.icon}
            />
            <img
              src={
                dropdownOpen
                  ? "/language-arrow-up.svg"
                  : "/language-arrow-down.svg"
              }
              alt="arrow"
              onClick={toggleDropdown}
            />
          </div>

          {dropdownOpen && (
            <div className={styles.dropdown_menu}>
              {countryLocales.map((locale) => (
                <Link
                  key={locale}
                  href={switchLanguage("")}
                  locale={locale}
                  className={styles.dropdown_item}
                >
                  <p onClick={toggleDropdown}>{localeToCountryName[locale]}</p>
                </Link>
              ))}
            </div>
          )}
          <img
            src="/menu-icon.svg"
            alt="menu icon"
            className={styles.menu_icon}
            onClick={toggleMobileMenu}
          />
        </div>
      </div>

      {mobileMenuOpen && (
        <div className={styles.header_mobile_menu} ref={menuRef}>
          <div className={styles.header_mobile_menu_links}>
            <Link
              className={styles.header_mobile_menu_links_item}
              href="/"
              onClick={toggleMobileMenu}
            >
              <p className={`${isActivePath("/") ? styles.active : ""}`}>
                {t("navLinks.home")}
              </p>
            </Link>
            <Link
              className={styles.header_mobile_menu_links_item}
              href="/standards"
              onClick={toggleMobileMenu}
            >
              <p
                className={`${isActivePath("/standards") ? styles.active : ""}`}
              >
                {t("navLinks.standards")}
              </p>
            </Link>
            <Link
              className={styles.header_mobile_menu_links_item}
              href="/fields-and-sectors"
              onClick={toggleMobileMenu}
            >
              <p
                className={`${
                  isActivePath("/fields-and-sectors") ? styles.active : ""
                }`}
              >
                {t("navLinks.sectors")}
              </p>
            </Link>
            <Link
              className={styles.header_mobile_menu_links_item}
              href="/pricing"
              onClick={toggleMobileMenu}
            >
              <p className={`${isActivePath("/pricing") ? styles.active : ""}`}>
                {t("navLinks.pricing")}
              </p>
            </Link>
            <Link
              className={styles.header_mobile_menu_links_item}
              href="/about-us"
              onClick={toggleMobileMenu}
            >
              <p
                className={`${isActivePath("/about-us") ? styles.active : ""}`}
              >
                {t("navLinks.about")}
              </p>
            </Link>
            <Link
              className={styles.header_mobile_menu_links_item}
              href="/imprint"
              onClick={toggleMobileMenu}
            >
              <p
                className={`${
                  isActivePath("/imprint") ? styles.active : ""
                }`}
              >
                {t("navLinks.contact")}
              </p>
            </Link>

            <BaseButton
              text="Close"
              variant="orange"
              onClick={toggleMobileMenu}
            />
          </div>
        </div>
      )}
    </div>
  );
}