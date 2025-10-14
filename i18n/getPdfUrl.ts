import { NextRouter } from "next/router";

const getPdfUrl = (router: NextRouter) => {
  const locale = router?.locale || "en";
  switch (locale) {
    case "en":
      return "/pdf-files/audit-eng.pdf";
    case "de":
      return "/pdf-files/audit-deu.pdf";
    default:
      return "/pdf-files/audit-eng.pdf";
  }
};

export default getPdfUrl;
