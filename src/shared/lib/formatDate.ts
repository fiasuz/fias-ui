import dayjs from 'dayjs';
import 'dayjs/locale/uz-latn';
import 'dayjs/locale/uz';
import 'dayjs/locale/ru';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';
import { getLocale } from 'next-intl/server';

// Install Dayjs plugins
dayjs.extend(localizedFormat);
dayjs.extend(relativeTime);

// Find locale
const getCurrentLocale = async () => {
  const locale = await getLocale();
  switch (locale) {
    case 'ki':
      return 'uz';
    case 'uz':
      return 'uz-latn';
    case 'ru':
      return 'ru';

    default:
      return 'uz-latn';
  }
};

const formatDate = {
  /**
   * Show date in specified format
   * @param time Date object or string or number
   * @param format type
   * @param locale Language (optional)
   * @returns string
   */
  to: async (
    time: Date | string | number,
    format: string,
    locale?: string,
  ): Promise<string> => {
    const currentLocale = locale || (await getCurrentLocale());
    return dayjs(time).locale(currentLocale).format(format);
  },

  /**
   * Sync date in specified format (for client-side)
   * @param time Date object or string or number
   * @param format type
   * @param locale Language (optional, standard Uzbek)
   * @returns string
   */
  format: (
    time: Date | string | number,
    format: string,
    locale: string = 'uz',
  ): string => {
    return dayjs(time).locale(locale).format(format);
  },

  /**
   * Show date in relative time format (today, yesterday, 2 days ago,...)
   * @param time Date object or string or number
   * @param locale Language (optional, standard Uzbek)
   * @returns string
   */
  relative: async (
    time: Date | string | number,
    locale?: string,
  ): Promise<string> => {
    const currentLocale = locale || (await getCurrentLocale());
    return dayjs(time).locale(currentLocale).fromNow();
  },

  /**
   * Show relative time synchronously (for client-side)
   * @param time Date object or string or number
   * @param locale Language (optional, standard Uzbek)
   * @returns string
   */
  relativeFormat: (
    time: Date | string | number,
    locale: string = 'uz',
  ): string => {
    return dayjs(time).locale(locale).fromNow();
  },
};

export default formatDate;
