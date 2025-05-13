import { LanguageRoutes } from '../config/i18n/types';

const getLocaleCS = (): LanguageRoutes | undefined => {
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    const match = document.cookie
      .split('; ')
      .find((row) => row.startsWith('NEXT_LOCALE='));
    return match?.split('=')[1] as LanguageRoutes;
  }
  return undefined;
};

export default getLocaleCS;
