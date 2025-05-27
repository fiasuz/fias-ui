/**
 * Add base url to url
 * @param url Current url
 * @returns string
 */
const addBaseUrl = (url: string) => {
  return import.meta.env.VITE_API_URL + url;
};

export default addBaseUrl;
