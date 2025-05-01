/**
 * Raqamni format qilish (+998 00 111-22-33)
 * @param value Format qilinishi kerak bo'lgan raqam
 * @returns string +998 00 111-22-33
 */
const formatPhone = (value: string) => {
  // Faqat raqamlarni qoldirish
  const digits = value.replace(/\D/g, "");

  // Ma'lumotlar bo'lmasa bo'sh string qaytarish
  if (digits.length === 0) {
    return "";
  }

  const prefix = digits.startsWith("998") ? "+998 " : "+998 ";

  let formattedNumber = prefix;

  if (digits.length > 3) {
    formattedNumber += digits.slice(3, 5);
  }

  if (digits.length > 5) {
    formattedNumber += " " + digits.slice(5, 8);
  }

  if (digits.length > 8) {
    formattedNumber += "-" + digits.slice(8, 10);
  }

  if (digits.length > 10) {
    formattedNumber += "-" + digits.slice(10, 12);
  }

  return formattedNumber.trim();
};

export default formatPhone