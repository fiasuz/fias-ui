import i18n from '@/shared/config/i18n';
import { LanguageRoutes } from '@/shared/config/i18n/type';

/**
 * Format price. With label.
 * @param amount Price
 * @param withLabel Show label. Default false
 * @returns string. Ex. X XXX XXX sum
 */
const formatPrice = (amount: number | string, withLabel?: boolean) => {
  const locale = i18n.language;
  const label = withLabel
    ? locale == LanguageRoutes.RU
      ? ' сум'
      : locale == LanguageRoutes.KI
        ? ' сўм'
        : ' so‘m'
    : '';
  const parts = String(amount).split('.');
  const dollars = parts[0];
  const cents = parts.length > 1 ? parts[1] : '00';

  const formattedDollars = dollars.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  if (String(amount).length == 0) {
    return formattedDollars + '.' + cents + label;
  } else {
    return formattedDollars + label;
  }
};

export default formatPrice;
