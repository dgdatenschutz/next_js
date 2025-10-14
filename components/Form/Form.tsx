"use client";
import BaseButton from "../Base/Button/Button";
import BaseInput from "../Base/Input/Input";
import styles from "./Form.module.scss";
import { Open_Sans } from "next/font/google";
import { useState,useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import BaseModal from "../Base/Modal/Modal";
import { useTranslations } from "next-intl";
import {
  useGetContactDetailsQuery,
  usePostContactMutation,
  usePostAuditorMutation,
  usePostComplaintMutation,
} from "@/store/apiSlice";

const openSans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

interface FormProps {
  variant: "defaultForm" | "auditorForm" | "appealForm";
}

export default function Form({ variant }: FormProps) {
  const [IsModalOpen, setIsModalOpen] = useState(false);
  const main = useTranslations("Form");
  const modal = useTranslations("Modals");
  const [isError, setIsError] = useState(false);
  const button = useTranslations("Buttons");
  const [postContactForm] = usePostContactMutation();
  const [postAuditorForm] = usePostAuditorMutation();
  const [postComplaintForm] = usePostComplaintMutation();
  const { data: contactDetails } = useGetContactDetailsQuery();
  const [defaultFormData, setDefaultFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const handleCaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  const [auditorFormData, setAuditorFormData] = useState({
    name: "",
    email: "",
    country_code: "",
    phone_number: "",
    residency_country: "",
    linkedin_profile: "",
    cv_file: null as Blob | null,
  });

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isDefaultFormValid = () => {
    const { name, email, subject, message } = defaultFormData;
    return name && recaptchaToken && message && validateEmail(email) && subject;
  };

  const isAuditorFormValid = () => {
    const { name, email, country_code, phone_number, residency_country } =
      auditorFormData;
    return (
      name &&
      recaptchaToken &&
      validateEmail(email) &&
      country_code &&
      phone_number &&
      residency_country
    );
  };

  const isAppealFormValid = () => {
    const {
      complainants_name,
      complainants_email,
      country_code,
      phone_number,
      complaint_subject,
    } = complaintFormData;
    return (
      complainants_name &&
      recaptchaToken &&
      validateEmail(complainants_email) &&
      country_code &&
      phone_number &&
      complaint_subject
    );
  };

  const [complaintFormData, setComplaintFormData] = useState({
    complainants_name: "",
    complainants_email: "",
    country_code: "",
    phone_number: "",
    date_of_incident: "",
    complaint_subject: "",
    complaint_details: "",
  });

  const handleSubmit = async (
    formData: any,
    postMutation: Function,
    onSuccessMessage: string
  ) => {
    try {
      const result = await postMutation(formData).unwrap();
      if (result) {
        setIsModalOpen(true);
        setIsError(false);
      }
    } catch (error) {
      console.error(`Failed to submit form: ${onSuccessMessage}`, error);
      setIsModalOpen(true);
      setIsError(true);
    }
  };

  const handleDefaultFormSubmit = async () => {
    if (recaptchaToken) {
      const formDataWithCaptcha = { ...defaultFormData, recaptchaToken };
      await handleSubmit(formDataWithCaptcha, postContactForm, "defaultForm");
    } else {
      console.log("Please complete the reCAPTCHA challenge");
    }
  };

  const handleAuditorFormSubmit = async () => {
    if (recaptchaToken) {
      const formData = new FormData();
      Object.keys(auditorFormData).forEach((key) => {
        if (auditorFormData[key as keyof typeof auditorFormData]) {
          formData.append(
            key,
            auditorFormData[key as keyof typeof auditorFormData] as any
          );
        }
      });
      await handleSubmit(formData, postAuditorForm, "auditorForm");
    }
  };

  const handleAppealFormSubmit = async () => {
    if (recaptchaToken) {
      await handleSubmit(complaintFormData, postComplaintForm, "appealForm");
    }
  };
  return (
    <div className={openSans.className}>
      <div className={styles.main}>
        <div className={styles.form}>
          {variant === "defaultForm" && (
            <div className={styles.form_fields}>
              <div className={styles.form_fields_title}>
                <p>{main("defaultForm.title")}</p>
              </div>
              <div className={styles.form_fields_content}>
                <div>
                  <BaseInput
                    name={main("defaultForm.name")}
                    variant="text"
                    onChange={(e: any) =>
                      setDefaultFormData({
                        ...defaultFormData,
                        name: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <BaseInput
                    name={main("defaultForm.mail")}
                    variant="email"
                    onChange={(e: any) => {
                      const email = e.target.value;
                      setDefaultFormData({
                        ...defaultFormData,
                        email,
                      });
                    }}
                  />
                </div>
                <div>
                  <BaseInput
                    name={main("defaultForm.subject")}
                    variant="text"
                    onChange={(e: any) =>
                      setDefaultFormData({
                        ...defaultFormData,
                        subject: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <BaseInput
                    name={main("defaultForm.message")}
                    variant="text-area"
                    onChange={(e: any) =>
                      setDefaultFormData({
                        ...defaultFormData,
                        message: e.target.value,
                      })
                    }
                  />
                  {IsModalOpen && (
                    <div>
                      <BaseModal
                        message={
                          isError
                            ? "Try again later or check if the fields are filled in correctly"
                            : modal("defaultModal.message")
                        }
                        imageUrl="/mail-lg.png"
                        onClose={() => setIsModalOpen(false)}
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className={styles.form_fields_info}>
                <p>{main("defaultForm.description")}</p>
              </div>

              <div className={styles.form_fields_submit}>
                <div className={styles.recaptcha_block}>
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={
                      process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string
                    }
                    size="normal"
                    onChange={handleCaptchaChange}
                    datatype="image"
                  />
                </div>
                <BaseButton
                  disabled={!isDefaultFormValid()}
                  text={button("submit")}
                  variant="defaultBlue"
                  onClick={handleDefaultFormSubmit}
                />
              </div>
            </div>
          )}

          {variant === "auditorForm" && (
            <div className={styles.form_fields}>
              <div className={styles.form_fields_title}>
                <p>{main("auditorForm.title")}</p>
              </div>
              <div className={styles.form_fields_content_auditor}>
                <div>
                  <BaseInput
                    name={main("auditorForm.name")}
                    variant="text"
                    onChange={(e: any) =>
                      setAuditorFormData({
                        ...auditorFormData,
                        name: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <BaseInput
                    name={main("auditorForm.mail")}
                    variant="email"
                    onChange={(e: any) => {
                      const email = e.target.value;
                      setAuditorFormData({
                        ...auditorFormData,
                        email,
                      });
                    }}
                  />
                </div>
                <div>
                  <BaseInput
                    name={main("auditorForm.country-code")}
                    variant="text"
                    onChange={(e: any) =>
                      setAuditorFormData({
                        ...auditorFormData,
                        country_code: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <BaseInput
                    name={main("auditorForm.number")}
                    variant="number"
                    onChange={(e: any) =>
                      setAuditorFormData({
                        ...auditorFormData,
                        phone_number: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <BaseInput
                    name={main("auditorForm.residency")}
                    variant="text"
                    onChange={(e: any) =>
                      setAuditorFormData({
                        ...auditorFormData,
                        residency_country: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <BaseInput
                    name={main("auditorForm.linkedIn")}
                    variant="text"
                    onChange={(e: any) =>
                      setAuditorFormData({
                        ...auditorFormData,
                        linkedin_profile: e.target.value,
                      })
                    }
                  />
                </div>
                <div className={styles.attach_cv_input}>
                  <BaseButton
                    icon="/button-file.svg"
                    text={main("auditorForm.file")}
                    variant="file"
                    onChange={async (
                      e: React.ChangeEvent<HTMLInputElement>
                    ) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onloadend = () => {
                          const blob = new Blob(
                            [reader.result as ArrayBuffer],
                            { type: file.type }
                          );
                          setAuditorFormData({
                            ...auditorFormData,
                            cv_file: blob,
                          });
                        };
                        reader.readAsArrayBuffer(file);
                      }
                    }}
                  />
                </div>
              </div>

              <div className={styles.form_fields_info}>
                <p>{main("auditorForm.description")}</p>
              </div>

              <div className={styles.form_fields_submit}>
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
                  size="normal"
                  onChange={handleCaptchaChange}
                  datatype="image"
                />
                <BaseButton
                  disabled={!isAuditorFormValid()}
                  text={button("submit")}
                  variant="defaultBlue"
                  onClick={handleAuditorFormSubmit}
                />
                {IsModalOpen && (
                  <div>
                    <BaseModal
                      title={
                        isError
                          ? "Something went wrong"
                          : modal("auditorModal.title")
                      }
                      message={
                        isError
                          ? "Try again later or check if the fields are filled in correctly"
                          : modal("auditorModal.message")
                      }
                      onClose={() => setIsModalOpen(false)}
                    />
                  </div>
                )}
              </div>
            </div>
          )}

          {variant === "appealForm" && (
            <div className={styles.form_fields}>
              <div className={styles.form_fields_content_appeal}>
                <div>
                  <BaseInput
                    name={main("appealForm.name")}
                    variant="text"
                    onChange={(e: any) =>
                      setComplaintFormData({
                        ...complaintFormData,
                        complainants_name: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <BaseInput
                    name={main("appealForm.mail")}
                    variant="email"
                    onChange={(e: any) => {
                      const email = e.target.value;
                      setComplaintFormData({
                        ...complaintFormData,
                        complainants_email: email,
                      });
                    }}
                  />
                </div>
                <div>
                  <BaseInput
                    name={main("appealForm.country-code")}
                    variant="text"
                    onChange={(e: any) =>
                      setComplaintFormData({
                        ...complaintFormData,
                        country_code: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <BaseInput
                    name={main("appealForm.number")}
                    variant="number"
                    onChange={(e: any) =>
                      setComplaintFormData({
                        ...complaintFormData,
                        phone_number: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <BaseInput
                    name={main("appealForm.incident-date")}
                    variant="text"
                    onChange={(e: any) =>
                      setComplaintFormData({
                        ...complaintFormData,
                        date_of_incident: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <BaseInput
                    name={main("appealForm.about")}
                    variant="text"
                    onChange={(e: any) =>
                      setComplaintFormData({
                        ...complaintFormData,
                        complaint_subject: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <BaseInput
                    name={main("appealForm.details")}
                    variant="text-area"
                    onChange={(e: any) =>
                      setComplaintFormData({
                        ...complaintFormData,
                        complaint_details: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <div className={styles.form_fields_info}>
                <p>{main("appealForm.description")}</p>
              </div>

              <div className={styles.form_fields_submit}>
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
                  size="normal"
                  onChange={handleCaptchaChange}
                  datatype="image"
                  className={styles.recaptcha}
                />
                <BaseButton
                  disabled={!isAppealFormValid()}
                  text={button("submit")}
                  variant="defaultBlue"
                  onClick={handleAppealFormSubmit}
                />
                {IsModalOpen && (
                  <div>
                    <BaseModal
                      title={
                        isError
                          ? "Something went wrong"
                          : modal("appealModal.title")
                      }
                      message={
                        isError
                          ? "Try again later or check if the fields are filled in correctly"
                          : modal("appealModal.message")
                      }
                      onClose={() => setIsModalOpen(false)}
                    />
                  </div>
                )}
              </div>
            </div>
          )}

          <div className={styles.form_info}>
            <div className={styles.form_info_contact}>
              <p>{main("details.title")}</p>
              <div className={styles.form_info_contact_details}>
                {contactDetails &&
                  Object.entries(contactDetails).map(([key, value]) => {
                    if (value) {
                      let iconSrc = "";

                      if (key.includes("phone")) {
                        iconSrc = "/phone.svg";
                      } else if (key.includes("email")) {
                        iconSrc = "/email.svg";
                      } else if (key.includes("address")) {
                        iconSrc = "/location.svg";
                      } else {
                        return null;
                      }

                      return (
                        <div
                          key={key}
                          className={styles.form_info_contact_details_items}
                        >
                          <img
                            src={iconSrc}
                            alt={`${key} icon`}
                            className={
                              styles.form_info_contact_details_items_icons
                            }
                          />
                          <p>{value}</p>
                        </div>
                      );
                    }

                    return null;
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
