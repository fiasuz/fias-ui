import { routing } from "@/shared/config/i18n/routing";
import { redirect } from "next/navigation";

// This page only renders when the app is built statically (output: 'export')
export default function RootPage() {
  redirect(routing.defaultLocale);
}
