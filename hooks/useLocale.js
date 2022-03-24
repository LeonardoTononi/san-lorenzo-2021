import { useRouter } from "next/router";

import en from "../locales/en";
import it from "../locales/it";

export default function useLocale() {
  const router = useRouter();
  const { locale } = router;
  const t = (locale === "it" && it) || (locale === "en" && en);

  const handleChangeLang = (locale) => {
    router.push("/", "/home", { locale });
  };

  return { t, locale, handleChangeLang };
}
