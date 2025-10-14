import React from "react";
import styles from "./modal.module.scss";
import BaseButton from "../Button/Button";
import { useTranslations } from "next-intl";

interface BaseModalProps {
  message: string;
  onClose: () => void;
  imageUrl?: string;
  title?: string;
  withTwoButtons?: boolean;
  secondButtonText?: string;
  onSecondButtonClick?: () => void;
}

export default function BaseModal({
  message,
  onClose,
  imageUrl,
  title,
  withTwoButtons,
  secondButtonText,
  onSecondButtonClick,
}: BaseModalProps) {
  const modal = useTranslations("Modals");
  const button = useTranslations("Buttons");
  return (
    <div className={styles.overlay}>
      <div
        className={`${styles.modal} ${withTwoButtons ? styles.twoButtons : ""}`}
      >
        {imageUrl && (
          <img src={imageUrl} alt="modal icon" className={styles.icon} />
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
                  text={button("close")}
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
