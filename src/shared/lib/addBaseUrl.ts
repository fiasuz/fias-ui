/**
 * Add base url to url
 * @param url Current url
 * @returns string
 */
const addBaseUrl = (url: string) => {
  return process.env.NEXT_PUBLIC_API_URL + url;
};

export default addBaseUrl;
