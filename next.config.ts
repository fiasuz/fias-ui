import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin"

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false
};
const withNextIntl = createNextIntlPlugin("./src/shared/config/i18n/request.ts")

export default withNextIntl(nextConfig);
