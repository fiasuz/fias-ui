/**
 * Format the number (+998 00 111-22-33)
 * @param value Number to be formatted (XXXYYZZZAABB)
 * @returns string +998 00 111-22-33
 */
const formatPhone = (value: string) => {
  // Keep only numbers
  const digits = value.replace(/\D/g, '');

  // Return empty string if data is not available
  if (digits.length === 0) {
    return '';
  }

  const prefix = digits.startsWith('998') ? '+998 ' : '+998 ';

  let formattedNumber = prefix;

  if (digits.length > 3) {
    formattedNumber += digits.slice(3, 5);
  }

  if (digits.length > 5) {
    formattedNumber += ' ' + digits.slice(5, 8);
  }

  if (digits.length > 8) {
    formattedNumber += '-' + digits.slice(8, 10);
  }

  if (digits.length > 10) {
    formattedNumber += '-' + digits.slice(10, 12);
  }

  return formattedNumber.trim();
};

export default formatPhone;
