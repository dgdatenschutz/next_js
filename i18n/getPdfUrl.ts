import { NextRouter } from "next/router";

const getPdfUrl = (router: NextRouter) => {
 const locale = router?.locale || "en";
  switch (locale) {
    case "en":
      return "/pdf-files/audit-eng.pdf";
    case "deu":
      return "/pdf-files/audit-deu.pdf";
    case "arm":
      return "/pdf-files/audit-arm.pdf";
  }
};

export default getPdfUrl;
