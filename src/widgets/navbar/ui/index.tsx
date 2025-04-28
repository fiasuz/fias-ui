import { Accordion } from "@/shared/ui/accordion";
import { Button } from "@/shared/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/shared/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/ui/sheet";
import { Menu } from "lucide-react";
import { menu } from "../lib/data";
import { PRODUCT_INFO } from "@/shared/constants/data";
import RenderMenuItem from "./RenderItem";
import RenderMobileMenuItem from "./RenderMobileMenuItem";
import { ChangeLang } from "./ChangeLang";

const Navbar = () => {
  const auth = {
    login: { title: "Login", url: "#" },
    signup: { title: "Sign up", url: "#" },
  };

  return (
    <section className="py-4">
      <div className="custom-container">
        {/* Desktop Menu */}
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <a href={"/"} className="flex items-center gap-2">
              <img
                src={PRODUCT_INFO.logo}
                className="max-h-8"
                alt={PRODUCT_INFO.name}
              />
              <span className="text-lg font-semibold tracking-tighter">
                {PRODUCT_INFO.name}
              </span>
            </a>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => RenderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex gap-2">
            <ChangeLang />
            <Button asChild variant="outline">
              <a href={auth.login.url}>{auth.login.title}</a>
            </Button>
            <Button asChild>
              <a href={auth.signup.url}>{auth.signup.title}</a>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href={PRODUCT_INFO.logo} className="flex items-center gap-2">
              <img
                src={PRODUCT_INFO.logo}
                className="max-h-8"
                alt={PRODUCT_INFO.name}
              />
            </a>
            <Sheet>
              <div className="space-x-2">
                <ChangeLang />
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="size-4" />
                  </Button>
                </SheetTrigger>
              </div>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <a
                      href={PRODUCT_INFO.logo}
                      className="flex items-center gap-2"
                    >
                      <img
                        src={PRODUCT_INFO.logo}
                        className="max-h-8"
                        alt={PRODUCT_INFO.name}
                      />
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => RenderMobileMenuItem(item))}
                  </Accordion>

                  <div className="flex flex-col gap-3">
                    <Button asChild variant="outline">
                      <a href={auth.login.url}>{auth.login.title}</a>
                    </Button>
                    <Button asChild>
                      <a href={auth.signup.url}>{auth.signup.title}</a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
