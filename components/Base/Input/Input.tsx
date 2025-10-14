import styles from "./input.module.scss";
interface BaseInputProps {
  name?: string;
  variant: "text" | "email" | "number" | "text-area" | "checkbox";
  checkBoxText?: string;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}
export default function BaseInput({
  name,
  variant,
  checkBoxText,
  onChange,
}: BaseInputProps) {
  return (
    <div className={styles.fields}>
      <p className={styles.fields_name}>{name}</p>

      {variant === "text" && (
        <input
          className={styles.fields_item}
          type="text"
          required
          onChange={onChange}
        />
      )}
      {variant === "email" && (
        <input
          className={styles.fields_item}
          type="email"
          required
          onChange={onChange}
        />
      )}
      {variant === "number" && (
        <input
          className={styles.fields_item}
          type="number"
          required
          onChange={onChange}
        />
      )}

      {variant === "text-area" && (
        <textarea className={styles.fields_text_area} onChange={onChange} />
      )}

      {variant === "checkbox" && (
        <div className={styles.fields_checkbox}>
          <input
            className={styles.fields_item_checkbox}
            type="checkbox"
            required
          />
          {checkBoxText && (
            <p className={styles.checkbox_text}>{checkBoxText}</p>
          )}
        </div>
      )}
    </div>
  );
}
