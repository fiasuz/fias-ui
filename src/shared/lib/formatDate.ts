import dayjs from "dayjs";
import "dayjs/locale/uz-latn";
import "dayjs/locale/en";
import "dayjs/locale/ru";
import localizedFormat from "dayjs/plugin/localizedFormat";
import relativeTime from "dayjs/plugin/relativeTime";
import { getLocale } from "next-intl/server";

// Dayjs pluginlarini o'rnatish
dayjs.extend(localizedFormat);
dayjs.extend(relativeTime);

// Lokalizatsiyani olish uchun funksiya
const getCurrentLocale = async () => {
  try {
    return await getLocale();
  } catch (error) {
    // next-intl konfiguratsiya tashqarisida ishlayotganda xatolikni oldini olish
    return "uz-latn"; // Standart til
  }
};

const formatDate = {
  /**
   * Sanani belgilangan formatda ko'rsatish
   * @param time Sana obyekti yoki string yoki number
   * @param format Format turi
   * @param locale Til (ixtiyoriy)
   * @returns Formatlangan sana stringi
   */
  to: async (time: Date | string | number, format: string, locale?: string): Promise<string> => {
    const currentLocale = locale || await getCurrentLocale();
    return dayjs(time).locale(currentLocale).format(format);
  },

  /**
   * Sanani belgilangan formatda sinxron ko'rsatish (client-side uchun)
   * @param time Sana obyekti yoki string yoki number
   * @param format Format turi
   * @param locale Til (ixtiyoriy, standart o'zbek tili)
   * @returns Formatlangan sana stringi
   */
  format: (time: Date | string | number, format: string, locale: string = "uz"): string => {
    return dayjs(time).locale(locale).format(format);
  },

  /**
   * Sanani nisbiy vaqt formatida ko'rsatish (bugun, kecha, 2 kun oldin, ...)
   * @param time Sana obyekti yoki string yoki number
   * @param locale Til (ixtiyoriy, standart o'zbek tili)
   * @returns Nisbiy vaqt stringi
   */
  relative: async (time: Date | string | number, locale?: string): Promise<string> => {
    const currentLocale = locale || await getCurrentLocale();
    return dayjs(time).locale(currentLocale).fromNow();
  },
  
  /**
   * Nisbiy vaqtni sinxron ravishda ko'rsatish (client-side uchun)
   * @param time Sana obyekti yoki string yoki number
   * @param locale Til (ixtiyoriy, standart o'zbek tili)
   * @returns Nisbiy vaqt stringi
   */
  relativeFormat: (time: Date | string | number, locale: string = "uz"): string => {
    return dayjs(time).locale(locale).fromNow();
  }
};

export default formatDate;