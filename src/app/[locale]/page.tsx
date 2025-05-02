import formatDate from "@/shared/lib/formatDate";
import Welcome from "@/widgets/welcome";
import { getLocale } from "next-intl/server";

export default function Home() {
  return (
    <>
    <h1>{formatDate.relative(Date.now())}</h1>
    <h1>{getLocale()}</h1>
    <Welcome />
    </>
  );
}
