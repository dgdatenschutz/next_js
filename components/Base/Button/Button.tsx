import Image from "next/image";
import styles from "./Button.module.scss";

interface BaseButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  onChange?: (e: any) => void;
  variant:
    | "defaultBlue"
    | "lightBlue"
    | "orange"
    | "white"
    | "transparent"
    | "file";
  icon?: string;
}

export default function BaseButton({
  text,
  variant,
  onClick,
  onChange,
  disabled,
  icon,
}: BaseButtonProps) {
  return (
    <div>
      {variant === "file" ? (
        <>
          <input
            type="file"
            id="file-input"
            style={{ display: "none" }}
            onChange={onChange}
          />
          <label
            htmlFor="file-input"
            className={`${styles.button} ${styles[variant]}`}
          >
            {icon && (
              <Image
                src={icon}
                width={20}
                height={20}
                alt="button icon"
                className={styles.attach_icon}
              />
            )}
            {text}
          </label>
        </>
      ) : (
        <button
          onClick={onClick}
          className={`${styles.button} ${styles[variant]}`}
          disabled={disabled}
        >
          {icon && (
            <Image src={icon} width={20} height={20} alt="button icon" />
          )}
          {text}
        </button>
      )}
    </div>
  );
}
